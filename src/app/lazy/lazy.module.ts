import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';
import { ToursComponent } from '../tours/tours.component';
import { StoryComponent } from '../story/story.component';
import { FormComponent } from '../form/form.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PopupComponent } from '../popup/popup.component';
import { ProjectOneComponent } from '../project-one/project-one.component';


@NgModule({
  declarations: [
    AboutComponent,
    FeaturesComponent,
    ToursComponent,
    StoryComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    PopupComponent,
    ProjectOneComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
