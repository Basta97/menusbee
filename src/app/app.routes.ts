import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./features/auth/auth').then(c => c.Auth)
    },
    {
        path: '',
        loadComponent: () => import('./layout/shell/shell').then(c => c.Shell),
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home').then(c => c.Home)
            },
            {
                path: 'qr-generator',
                loadComponent: () => import('./features/qr-generator/qr-generator').then(c => c.QrGenerator)
            },
            {
                path: 'features',
                loadComponent: () => import('./features/features-page/features-page').then(c => c.FeaturesPage)
            },
            {
                path: 'pricing',
                loadComponent: () => import('./features/pricing-page/pricing-page').then(c => c.PricingPage)
            },
            {
                path: 'package-detail',
                loadComponent: () => import('./features/package-detail/package-detail').then(c => c.PackageDetail)
            },
            {
                path: 'faq',
                loadComponent: () => import('./features/faq-page/faq-page').then(c => c.FaqPage)
            },
            {
                path: 'blog',
                loadComponent: () => import('./features/blog-page/blog-page').then(c => c.BlogPage)
            },
            {
                path: 'contact',
                loadComponent: () => import('./features/contact-page/contact-page').then(c => c.ContactPage)
            },
            {
                path: 'link-creator',
                loadComponent: () => import('./features/link-creator/link-creator').then(c => c.LinkCreator)
            }
        ]
    }
];
