import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      import('./anonymous/anonymous-layout/anonymous-layout.component')
        .then(c => c.AnonymousLayoutComponent),
    loadChildren: async () => import('./anonymous/anonymous.routes').then(r => r.ANONYMOUS_ROUTES),
  }
];
