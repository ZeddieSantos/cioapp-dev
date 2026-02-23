import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceCard {
  title: string;
  description: string;
  chips: string[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

interface AudienceCard {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  protected readonly services: ServiceCard[] = [
    {
      title: 'Tax Preparation & Filing',
      description:
        'Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.',
      chips: ['1000 Leads', 'Experienced', 'Trust Team'],
      imageUrl: 'https://source.unsplash.com/uxhz6CI7Onk/900x600',
      imageAlt: 'Coins and financial tools representing tax planning.'
    },
    {
      title: 'IRS Audit Assistance',
      description:
        'Offer expert guidance and representation to resolve tax disputes and audits with confidence.',
      chips: ['1000 Leads', 'Experienced', 'Trust Team'],
      imageUrl: 'https://source.unsplash.com/Yu-HIuvap1s/900x600',
      imageAlt: 'Analytics board with charts for audit and reporting support.',
      reverse: true
    },
    {
      title: 'Bookkeeping & Accounting',
      description:
        'Maintain organized financial records with detailed day-to-day reports to support business growth and financial health.',
      chips: ['90% ROI', 'Experienced', 'Trust Team'],
      imageUrl: 'https://source.unsplash.com/cqDBxXdX-h8/900x600',
      imageAlt: 'Financial records and business accounting work materials.'
    }
  ];

  protected readonly audiences: AudienceCard[] = [
    {
      title: 'For Freelancers',
      description:
        'Stay in charge of your income with seamless expense tracking, automated deductions, and smart tax strategies so you can focus on doing what you love.'
    },
    {
      title: 'For Families',
      description:
        'From budgeting tools to tax-saving insights, we help you plan for the future, manage refunds, and keep your household finances running smoothly.'
    },
    {
      title: 'For Small Businesses',
      description:
        'Simplify bookkeeping, payroll, and financial management so your business can scale with confidence and free time to focus on growth.'
    }
  ];

  protected readonly images = {
    hero: 'https://source.unsplash.com/gWjlDDJdmlI/800x800',
    testimonialProfile: 'https://source.unsplash.com/iEEBWgY_6lA/180x180',
    laptopBanner: 'https://source.unsplash.com/Hcfwew744z4/1800x950',
    planCard: 'https://source.unsplash.com/L0oJ4Dlfyuo-/900x600'
  };
}
