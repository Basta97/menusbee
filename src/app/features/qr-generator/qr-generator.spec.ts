import { TestBed } from '@angular/core/testing';
import { QrGenerator } from './qr-generator';

describe('QrGenerator', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [QrGenerator],
        }).compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(QrGenerator);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should have default form values', () => {
        const fixture = TestBed.createComponent(QrGenerator);
        const component = fixture.componentInstance;
        const form = component.qrForm();

        expect(form.url).toBe('https://menu-site.com/sample');
        expect(form.size).toBe(256);
        expect(form.fgColor).toBe('#000000');
        expect(form.bgColor).toBe('#ffffff');
    });
});
