import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  // Add other specific routes here
  {
    path: '**',
    redirectTo: ''
  }
];
