import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ToursComponent } from './tours/tours.component';
import { StoryComponent } from './story/story.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PopupComponent } from './popup/popup.component';
import { HotelComponent } from './hotel/hotel.component';
import { ProjectOneComponent } from './project-one/project-one.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FeaturesComponent,
    ToursComponent,
    StoryComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    PopupComponent,
    HotelComponent,
    ProjectOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
