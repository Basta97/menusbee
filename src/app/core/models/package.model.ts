export interface PackageFeature {
    name: string;
    included: boolean;
    highlight?: boolean; // Used for features like "جميع مميزات الباقة الأساسية"
}

export interface Package {
    id: string; // e.g., 'free', 'basic', 'pro', 'enterprise'
    name: string;
    description: string;
    priceMonthly: number;
    priceYearly: number;
    iconName: string; // The SVG or icon reference
    isPopular?: boolean;
    theme: 'gray' | 'primary' | 'dark'; // Defines card styling based on the existing pricing UI 
    features: PackageFeature[];
    buttonText: string;
}
