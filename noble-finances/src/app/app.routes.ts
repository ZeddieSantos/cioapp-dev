import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'book',
    component: BookPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
