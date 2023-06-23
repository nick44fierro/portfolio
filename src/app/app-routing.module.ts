import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
//import { WelcomeComponent } from "./home/welcome.component";
//import { PageNotFoundComponent } from "./page-not-found.component";
import { ResumeComponent } from "./resume/resume.component";
import { IntroComponent } from "./intro/intro.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { WorkExperienceComponent } from "./resume/work-experience.component";
import { EducationComponent } from "./resume/education.component";
import { SkillsComponent } from "./resume/skills.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'resume',
                component: ResumeComponent,
                children: [
                    {
                        path: '', redirectTo: 'experience', pathMatch: 'full'
                    },
                    {
                        path: 'experience', component: WorkExperienceComponent
                    },
                    {
                        path: 'education', component: EducationComponent
                    },
                    {
                        path: 'skills', component: SkillsComponent
                    }
                ]
            },
            { path: 'intro', component: IntroComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: 'intro', pathMatch: 'full' },
            { path: '**', redirectTo: 'intro', pathMatch: 'full' }
        ], { anchorScrolling: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }