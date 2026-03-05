import { Component, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
    selector: 'app-qr-generator',
    standalone: true,
    imports: [FormsModule, QRCodeComponent],
    templateUrl: './qr-generator.html',
    styleUrl: './qr-generator.css',
})
export class QrGenerator {
    private isBrowser: boolean;

    /** Form state signal */
    qrForm = signal({
        url: 'https://menu-site.com/sample',
        size: 256,
        fgColor: '#000000',
        bgColor: '#ffffff',
    });

    /** Computed QR data (the URL to encode) */
    qrData = computed(() => this.qrForm().url);

    /** Whether the QR preview is visible */
    showPreview = signal(false);

    /** Logo image source (base64 data URL from uploaded file) */
    logoSrc = signal('');

    /** Logo file name for display */
    logoFileName = signal('');

    /** Guest mode flag — set false to unlock trial features */
    guestMode = true;

    /** Available QR sizes */
    sizes = [128, 192, 256, 320, 400, 512];

    /** Locked trial features for upsell */
    trialFeatures = [
        { icon: '🔄', title: 'QR ديناميكي', desc: 'غيّر الرابط بدون إعادة طباعة الكود' },
        { icon: '📊', title: 'إحصائيات المسح', desc: 'تتبع عدد مرات المسح والأجهزة المستخدمة' },
        { icon: '🎨', title: 'شعار مخصص', desc: 'أضف شعار نشاطك التجاري داخل QR Code' },
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    /** Update a single form field */
    updateField<K extends keyof ReturnType<typeof this.qrForm>>(
        key: K,
        value: ReturnType<typeof this.qrForm>[K]
    ) {
        this.qrForm.update((prev) => ({ ...prev, [key]: value }));
    }

    /** Show the QR code preview */
    generate() {
        if (this.qrForm().url.trim()) {
            this.showPreview.set(true);
        }
    }

    /** Handle logo file upload */
    onLogoUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) return;

        this.logoFileName.set(file.name);

        const reader = new FileReader();
        reader.onload = () => {
            this.addWhiteBackground(reader.result as string);
        };
        reader.readAsDataURL(file);
    }

    /** Draw logo on a white rounded-rect background with padding */
    private addWhiteBackground(src: string) {
        if (!this.isBrowser) {
            this.logoSrc.set(src);
            return;
        }

        const img = new Image();
        img.onload = () => {
            const padding = 10;
            const radius = 10;
            const size = Math.max(img.width, img.height);
            const canvasSize = size + padding * 2;

            const canvas = document.createElement('canvas');
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            const ctx = canvas.getContext('2d')!;

            // Draw white rounded-rect background
            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.lineTo(canvasSize - radius, 0);
            ctx.quadraticCurveTo(canvasSize, 0, canvasSize, radius);
            ctx.lineTo(canvasSize, canvasSize - radius);
            ctx.quadraticCurveTo(canvasSize, canvasSize, canvasSize - radius, canvasSize);
            ctx.lineTo(radius, canvasSize);
            ctx.quadraticCurveTo(0, canvasSize, 0, canvasSize - radius);
            ctx.lineTo(0, radius);
            ctx.quadraticCurveTo(0, 0, radius, 0);
            ctx.closePath();
            ctx.fillStyle = '#ffffff';
            ctx.fill();

            // Draw the logo centered
            const x = (canvasSize - img.width) / 2;
            const y = (canvasSize - img.height) / 2;
            ctx.drawImage(img, x, y);

            this.logoSrc.set(canvas.toDataURL('image/png'));
        };
        img.src = src;
    }

    /** Remove the uploaded logo */
    removeLogo() {
        this.logoSrc.set('');
        this.logoFileName.set('');
    }

    /** Computed logo size (proportional to QR size) */
    logoSize = computed(() => Math.round(this.qrForm().size * 0.2));

    /** Download the generated QR code as PNG */
    downloadQr() {
        if (!this.isBrowser) return;

        // angularx-qrcode renders a <canvas> inside <qrcode>
        const canvas = document.querySelector('qrcode canvas') as HTMLCanvasElement;
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = 'menusbee-qr.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
}
