import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServicesPageComponent } from './services-page.component';

describe('ServicesPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPageComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ServicesPageComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should render the hero heading', () => {
    const fixture = TestBed.createComponent(ServicesPageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero h1')?.textContent).toContain('Your Financial Journey, Clearly Defined');
  });

  it('should render one onboarding step card per step', () => {
    const fixture = TestBed.createComponent(ServicesPageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.step-card');

    expect(cards.length).toBe(3);
  });

  it('should render one belief card per belief', () => {
    const fixture = TestBed.createComponent(ServicesPageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.belief-card');

    expect(cards.length).toBe(3);
  });
});