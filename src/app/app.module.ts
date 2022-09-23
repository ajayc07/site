import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { IntroJumbotronComponent } from './component/intro-jumbotron/intro-jumbotron.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { GreetComponent } from './component/greet/greet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroJumbotronComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
