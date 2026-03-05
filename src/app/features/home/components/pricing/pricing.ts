import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Need CommonModule for ngClass

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  // Toggle for Monthly / Yearly billing cycle
  // false = Monthly (شهري)
  // true = Yearly (سنوي)
  isYearly: boolean = false;

  toggleBillingCycle() {
    this.isYearly = !this.isYearly;
  }
}
