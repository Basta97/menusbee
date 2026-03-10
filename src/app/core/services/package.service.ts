import { Injectable } from '@angular/core';
import { Package } from '../models/package.model';

@Injectable({
    providedIn: 'root'
})
export class PackageService {
    private packages: Package[] = [
        {
            id: 'free',
            name: 'الباقة المجانية',
            description: 'فرصة رائعة للتجربة والبداية مع منيو بسيط',
            priceMonthly: 0,
            priceYearly: 0,
            iconName: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            theme: 'gray',
            buttonText: 'ابدأ مجاناً الان',
            features: [
                { name: '5 أقسام كحد أقصى', included: true },
                { name: '15 عنصر كحد أقصى', included: true },
                { name: 'دعم لغتين (عربي/إنجليزي)', included: true },
                { name: 'لوحة تحكم بسيطة', included: true },
                { name: '— يتضمن اعلانات خارجية', included: false }
            ]
        },
        {
            id: 'basic',
            name: 'الباقة الأساسية',
            description: 'مثالية للمطاعم الناشئة والكافيهات التي تحتاج منيو متكامل',
            priceMonthly: 250,
            priceYearly: 2500,
            iconName: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
            theme: 'primary',
            buttonText: 'اختر هذه الباقة',
            features: [
                { name: 'تتضمن مميزات الباقة المجانية', included: true, highlight: true },
                { name: 'أقسام وعناصر غير محدودة', included: true },
                { name: 'دعم لغات غير محدودة', included: true },
                { name: 'نسخ متعددة من العنصر (Variations)', included: true },
                { name: 'إدارة الخيارات والإضافات', included: true },
                { name: 'إدارة الفروع ومناطق التوصيل', included: true },
                { name: 'دعم التقييمات والخصومات', included: true },
                { name: 'بدون إعلانات خارجية تماماً', included: true }
            ]
        },
        {
            id: 'pro',
            name: 'الباقة الاحترافية',
            description: 'الحل الأمثل لإدارة عمليات مطعمك أو المقهى بالكامل',
            priceMonthly: 500,
            priceYearly: 5000,
            iconName: 'M13 10V3L4 14h7v7l9-11h-7z',
            isPopular: true,
            theme: 'primary',
            buttonText: 'اختر هذه الباقة',
            features: [
                { name: 'جميع مميزات الباقة الأساسية', included: true, highlight: true },
                { name: 'نظام نقاط البيع (شاشة الكاشير)', included: true },
                { name: 'لوحة تحكم وتقارير متقدمة للمبيعات', included: true },
                { name: 'إدارة شاشة الطلبات (KDS)', included: true },
                { name: 'إشعار للعميل بحالة الطلب (لحظي)', included: true },
                { name: 'نظام الطلب أونلاين المتكامل', included: true },
                { name: 'أنواع طلبات متعددة ومختلفة', included: true },
                { name: 'إدارة الطاولات للمطعم', included: true },
                { name: 'ادارة الموظفين وورديات العمل', included: true },
                { name: 'إدارة المخزون والتركيب الغذائي', included: true }
            ]
        },
        {
            id: 'enterprise',
            name: 'الباقة التجارية',
            description: 'باقة شاملة للمشاريع الكبيرة — تتضمن جميع مميزات الباقة الاحترافية بالإضافة إلى دومين خاص، تكامل مع بوابات الدفع، خدمات الرسائل SMS، واتساب للطلبات، وتكامل API كامل.',
            priceMonthly: 2000,
            priceYearly: 20000,
            iconName: '',
            theme: 'dark',
            buttonText: 'تواصل مع المبيعات الآن',
            features: [
                { name: 'اشعار واتساب', included: true },
                { name: 'دومين خاص', included: true },
                { name: 'بوابات الدفع', included: true },
                { name: 'تكامل SMS', included: true },
                { name: 'تكامل API', included: true }
            ]
        }
    ];

    getPackages(): Package[] {
        return this.packages;
    }

    getPackageById(id: string): Package | undefined {
        return this.packages.find(p => p.id === id);
    }
}
