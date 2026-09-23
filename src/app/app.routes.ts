import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // ---- Outside shell ----
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes)
  },

  // ---- Inside shell ----
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home').then((m) => m.HomeComponent),
        title: 'Home · Elementar RT'
      }
    ]
  },

  { path: '**', redirectTo: 'home' }
];
