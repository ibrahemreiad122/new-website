import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';

import { ProjectOneComponent } from './project-one/project-one.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {
    path: "",
    component: PortfolioComponent,
    pathMatch: "full"
  },
  {
    path: "trip",
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
    pathMatch: "full"
  },
  {
    path: 'hotel',
    loadChildren: () => import('./lazy-two/lazy-two.module').then(m => m.LazyTwoModule),
    pathMatch: "full"
  },
  {
    path: 'nexter',
    loadChildren: () => import('./lazythree/lazythree.module').then(m => m.LazythreeModule),
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
