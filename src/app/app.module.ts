import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResumeComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      //{ path: 'portfolio', component: PortfolioComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ], { anchorScrolling: 'enabled' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
