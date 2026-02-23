import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default footer content and book variant class', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.footer-variant-a')).toBeTruthy();
    expect(compiled.textContent).toContain('Noble Finances');
    expect(compiled.textContent).toContain('Financial Clarity You Can Trust');
  });

  it('should render home variant and custom copy', () => {
    component.variant = 'home';
    component.navLabel = 'Solutions';
    component.buttonLabel = 'Book an appointment';
    component.copyLine1 = 'Trusted finance support';
    component.copyLine2 = 'Tailored for growing businesses';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const navLink = compiled.querySelector('nav a');
    const actionButton = compiled.querySelector('nav button');

    expect(compiled.querySelector('.footer-variant-b')).toBeTruthy();
    expect(navLink?.textContent).toContain('Solutions');
    expect(actionButton?.textContent).toContain('Book an appointment');
    expect(compiled.textContent).toContain('Trusted finance support');
    expect(compiled.textContent).toContain('Tailored for growing businesses');
  });
});
