import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillsComponent } from './resume/skills.component';
import { WorkExperienceComponent } from './resume/work-experience.component';
import { EducationComponent } from './resume/education.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PortfolioComponent,
    IntroComponent,
    AboutComponent,
    ProfileComponent,
    ResumeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
