import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PackageService } from '../../core/services/package.service';
import { Package } from '../../core/models/package.model';

@Component({
  selector: 'app-package-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './package-detail.html',
  styleUrl: './package-detail.css',
})
export class PackageDetail implements OnInit {
  selectedPackage?: Package;
  isYearly: boolean = false;

  get price(): number {
    if (!this.selectedPackage) return 0;
    return this.isYearly ? this.selectedPackage.priceYearly : this.selectedPackage.priceMonthly;
  }

  get tax(): number {
    return Math.round(this.price * 0.14);
  }

  get total(): number {
    return this.price + this.tax;
  }

  get billingLabel(): string {
    return this.isYearly ? 'سنوي' : 'شهري';
  }

  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const planId = params['plan'] || 'pro';
      this.isYearly = params['billing'] === 'yearly';
      this.selectedPackage = this.packageService.getPackageById(planId);
    });
  }
}

