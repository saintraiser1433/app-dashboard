import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () => import('@pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'application',
    loadChildren: () => import('@pages/application/application.routes').then(m => m.routes)
  }


];
