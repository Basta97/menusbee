import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCto } from './qr-cto';

describe('QrCto', () => {
  let component: QrCto;
  let fixture: ComponentFixture<QrCto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrCto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
