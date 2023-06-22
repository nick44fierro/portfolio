import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from './work-experience.service';
import { EducationExperienceService } from './education-experience.service';
import { IEducationExperience, IWorkExperience } from './experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  constructor(private workExperienceService: WorkExperienceService, private educationExperienceService: EducationExperienceService) { }
  workExperiences: IWorkExperience[] = [
    {
      "start": "Jun 2023",
      "end": "Present",
      "location": "Remote",
      "description": "",
      "title": "Software Engineer Intern",
      "company": "Becht"
    },
    {
      "start": "Sept 2022",
      "end": "Jan 2023",
      "location": "Remote",
      "description": "I collaborated with other interns on a project to create a webpage that displayed the usage data of our company's software tools. We incorporated stakeholder feedback into our front-end design, utilizing Figma for mockups and wireframes. The implementation involved diverse technologies like .NET Core, C#, Razor Pages, Telerik Components, LINQ, HTML, CSS, and JavaScript. We tracked our progress and iteratively improved our product using user stories and tasks in Azure DevOps. I personally handled the development of the page filters component and the key performance indicator (KPI) grid, which were crucial to the project's success.",
      "title": "Software Engineer Intern",
      "company": "Becht"
    },
    {
      "start": "Jun 2022",
      "end": "Aug 2022",
      "location": "Woodbridge, NJ",
      "description": "During my tenure, I enhanced data migration processes by introducing and updating PL/SQL stored procedures and packages in Oracle. My contributions spanned across various projects, including investment policy statements, mailer workflows, and Fiserv data migration. I gained practical experience with tools such as SQL*Loader, SQL*Plus, PL/SQL Developer, Oracle Apex, and Oracle REST Data Services. I also developed an Oracle Apex application to create and modify distribution values for the firm’s security funds. Further, I had the opportunity to design a conceptual development plan for an employee mobile app, which I successfully presented to the CTO, COO, and the entire IT department.",
      "title": "Application Delivery Intern",
      "company": "Bessemer Trust"
    },
    {
      "start": "May 2021",
      "end": "August 2021",
      "location": "Remote",
      "description": "Wrote, debugged, and maintained C# for a Microsoft Word add-in built to assist legal professionals. <br> Optimized T-SQL queries for the development of reports based on business requirements. Created regular expressions to match case law document annotations against the company’s database",
      "title": "Software Development Intern",
      "company": "Benchly"
    }
  ];
  educationExperiences: IEducationExperience[] = [
    {
      "start": "2019",
      "end": "2023",
      "location": "State College, PA",
      "description": "",
      "school": "Penn State",
      "degreeType": "Bachelor's of Science",
      "areaOfStudy": "Computer Science"
    },
    {
      "start": "2020",
      "end": "2022",
      "location": "State College, PA",
      "description": "",
      "school": "Penn State Smeal College of Business",
      "degreeType": "Certificate",
      "areaOfStudy": "Business Fundamentals"
    },
    {
      "start": "2015",
      "end": "2019",
      "location": "Lincroft, NJ",
      "description": "",
      "school": "Brookdale Community College",
      "degreeType": "Associate's Degree of Arts",
      "areaOfStudy": "Social Science"
    }
  ];
  errorMessage = '';

  ngOnInit(): void {
    // this.workExperienceService.getWorkExperiences().subscribe({
    //   next: workExperiences => {
    //     this.workExperiences = workExperiences;
    //   },
    //   error: err => this.errorMessage = err
    // })
    // this.educationExperienceService.getWorkExperiences().subscribe({
    //   next: educationExperiences => {
    //     this.educationExperiences = educationExperiences;
    //   },
    //   error: err => this.errorMessage = err
    // })
  }
}
