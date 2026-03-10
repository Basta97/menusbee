import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { QrCto } from "../../shared/common/qr-cto/qr-cto";

@Component({
  selector: 'app-footer',
  imports: [QrCto],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  isChatOpen: boolean = false;
  isPricingPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isPricingPage = event.urlAfterRedirects.includes('/pricing');
    });
  }

  toggleChat(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage(message: string) {
    if (!message.trim()) return;
    const url = `https://wa.me/2010104099525?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    this.isChatOpen = false;
  }
}
