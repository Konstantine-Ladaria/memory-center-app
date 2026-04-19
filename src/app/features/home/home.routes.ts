import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

export const HOME_ROUTES: Routes = [
  {
    path: '', // This path will be relative to the parent route (e.g., /en/)
    component: MainPageComponent,
  },
];
