import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceStep {
  order: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

interface BeliefCard {
  order: string;
  description: string;
}

@Component({
  selector: 'app-services-page',
  imports: [RouterLink],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {
  protected readonly images = {
    hero: 'https://source.unsplash.com/1N5jt8zN_Bw/1000x700',
    city: 'https://source.unsplash.com/jK9dT34TfuI/1800x900',
    cta: 'https://source.unsplash.com/izgqv09oN7I/900x900'
  };

  protected readonly steps: ServiceStep[] = [
    {
      order: '1',
      title: 'Our tax advisors write you a plan',
      description:
        'Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.',
      imageUrl: 'https://source.unsplash.com/EhTcC9sYXsw/700x700',
      imageAlt: 'Pencils representing planning and preparation.'
    },
    {
      order: '2',
      title: 'Onboard us to your finances',
      description:
        'Offer expert guidance and representation to resolve tax audits and disputes with confidence.',
      imageUrl: 'https://source.unsplash.com/JM-qKEd1GMI/700x700',
      imageAlt: 'Cash and financial assets representing onboarding and management.'
    },
    {
      order: '3',
      title: 'We solve the rest',
      description:
        'Maintain organized financial records and provide clear reports to support business growth and financial health.',
      imageUrl: 'https://source.unsplash.com/9QorQ-eA5yM/700x700',
      imageAlt: 'Colorful cube representing structured problem solving.'
    }
  ];

  protected readonly beliefs: BeliefCard[] = [
    {
      order: '01',
      description:
        'In empowering individuals and small businesses with the knowledge and tools they need to achieve lasting financial confidence.'
    },
    {
      order: '02',
      description:
        'That personalized, trusted guidance, built on decades of experience, is the foundation of a successful financial partnership.'
    },
    {
      order: '03',
      description:
        'In simplifying complex financial matters, providing clear, actionable strategies that pave the way for your financial well-being.'
    }
  ];
}
