import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() public variant: 'book' | 'home' = 'book';
  @Input() public navLink = '/';
  @Input() public navLabel = 'Services';
  @Input() public buttonLink = '/book';
  @Input() public buttonLabel = 'Book an appointment';
}
