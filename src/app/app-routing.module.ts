import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
    title: 'Home',
  },
  {
    path: 'valentines-day',
    loadComponent: () => import('./components/valentines-day/valentines-day.component').then(c => c.ValentinesDayComponent),
    title: `Valentine's Day`,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
