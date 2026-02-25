import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() public variant: 'book' | 'home' = 'book';
  @Input() public navLink = '/';
  @Input() public navLabel = 'Services';
  @Input() public buttonLink = '/book';
  @Input() public buttonLabel = 'Book An Appointment';
  @Input() public copyLine1 = 'Financial Clarity You Can Trust';
  @Input() public copyLine2 = 'Trusted financial guidance for every stage of life and business since 1987';
  @Input() public copyright = '© 2025 All Rights Reserved';
}
