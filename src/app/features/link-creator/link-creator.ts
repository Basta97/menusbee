import { Component, signal, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-link-creator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './link-creator.html'
})
export class LinkCreator implements OnInit {
  private fb = inject(FormBuilder);
  private platformId = inject(PLATFORM_ID);

  linkForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    bio: [''],
    avatar: [''],
    links: this.fb.array([])
  });

  get linksFormArray() {
    return this.linkForm.get('links') as FormArray;
  }

  previewLink = signal('');
  showToast = signal(false);

  // Real-time state for live preview via signals
  formState = signal(this.linkForm.value);

  ngOnInit() {
    // Load from local storage if exists (only in browser)
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('linkCreatorState');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Ensure form array has correct number of controls before patching
          if (parsed.links && Array.isArray(parsed.links)) {
            parsed.links.forEach(() => this.addLink());
          }
          this.linkForm.patchValue(parsed);
          this.formState.set(this.linkForm.value);
        } catch (e) {
          console.error('Failed to parse saved state', e);
        }
      } else {
        // Init with default link if nothing in local storage
        this.addLink('موقعي الشخصي', 'https://example.com');
      }
    } else {
      // Server-side default
      this.addLink('موقعي الشخصي', 'https://example.com');
    }

    // Auto-save & update preview via ValueChanges
    this.linkForm.valueChanges.subscribe(val => {
      this.formState.set(val);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('linkCreatorState', JSON.stringify(val));
      }
    });
  }

  addLink(title = '', url = '') {
    this.linksFormArray.push(
      this.fb.group({
        title: [title, Validators.required],
        url: [url, [Validators.required, Validators.pattern('https?://.+')]]
      })
    );
  }

  removeLink(index: number) {
    this.linksFormArray.removeAt(index);
    // Mark as dirty to trigger value changes state easily if need be, 
    // although valueChanges fires automatically.
  }

  dummySave() {
    if (this.linkForm.invalid) {
      this.linkForm.markAllAsTouched();
      return;
    }
    console.log('Saved JSON Result:', this.linkForm.value);

    this.showToast.set(true);
    setTimeout(() => this.showToast.set(false), 3000);
  }

  copyLink() {
    const randomId = Math.random().toString(36).substring(2, 9);
    const url = `menusbee.com/l/${randomId}`;
    this.previewLink.set(url);

    // Fallback copy to clipboard
    navigator.clipboard.writeText(url).then(() => {
      this.showToast.set(true);
      setTimeout(() => this.showToast.set(false), 3000);
    }).catch(err => {
      console.error('Failed to copy', err);
      // Still show toast for UX
      this.showToast.set(true);
      setTimeout(() => this.showToast.set(false), 3000);
    });
  }
}
