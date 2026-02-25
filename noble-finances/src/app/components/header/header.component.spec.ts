import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default brand and book variant class', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Noble Finances');
    expect(compiled.querySelector('.header-variant-a')).toBeTruthy();
    expect(compiled.querySelector('.dark-btn')).toBeTruthy();
  });

  it('should render home variant and custom labels', () => {
    component.variant = 'home';
    component.navLabel = 'Consulting';
    component.buttonLabel = 'Schedule now';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const navLink = compiled.querySelector('nav a');
    const actionButton = compiled.querySelector('nav button');

    expect(compiled.querySelector('.header-variant-b')).toBeTruthy();
    expect(navLink?.textContent).toContain('Consulting');
    expect(actionButton?.textContent).toContain('Schedule now');
    expect(actionButton?.classList.contains('primary-btn')).toBeTrue();
  });
});
