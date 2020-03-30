import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectOneComponent } from '../project-one/project-one.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
