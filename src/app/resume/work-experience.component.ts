import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWorkExperience } from './experience';

@Component({
    templateUrl: './work-experience.component.html'
})
export class WorkExperienceComponent implements OnInit {
    errorMessage = '';
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

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

    }
}