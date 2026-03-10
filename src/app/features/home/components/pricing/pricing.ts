import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PackageService } from '../../../../core/services/package.service';
import { Package } from '../../../../core/models/package.model';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing implements OnInit {
  isYearly: boolean = false;
  packages: Package[] = [];
  enterprisePackage?: Package;

  constructor(
    private packageService: PackageService,
    private router: Router
  ) { }

  ngOnInit() {
    const allPackages: Package[] = this.packageService.getPackages();
    // Separate the enterprise package to match layout
    this.enterprisePackage = allPackages.find((p: Package) => p.id === 'enterprise');
    this.packages = allPackages.filter((p: Package) => ['free', 'basic', 'pro'].includes(p.id));
  }

  toggleBillingCycle() {
    this.isYearly = !this.isYearly;
  }

  selectPackage(pkgId: string) {
    if (pkgId === 'free') {
      this.router.navigate(['/qr-generator']);
    } else {
      // Add id to query or route
      this.router.navigate(['/package-detail'], { queryParams: { plan: pkgId, billing: this.isYearly ? 'yearly' : 'monthly' } });
    }
  }
}
