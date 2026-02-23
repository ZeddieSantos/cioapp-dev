import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should render the hero heading', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-copy h1')?.textContent).toContain('Financial Clarity You');
  });

  it('should render one service card per service', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.service-card');

    expect(cards.length).toBe(3);
  });

  it('should render one audience card per audience', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const audienceCards = compiled.querySelectorAll('.audience-grid article');

    expect(audienceCards.length).toBe(3);
  });
});