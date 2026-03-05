import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var Swiper: any;

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    // Only initialize Swiper on the client side (browser) to avoid SSR 'ReferenceError'
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        new Swiper('.partners-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 24, // 6px gap * 4 = 24px roughly
          loop: true,
          speed: 3000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          },
          allowTouchMove: false // Prevent manual swiping since it's a continuous marquee
        });
      }, 100);
    }
  }
}
