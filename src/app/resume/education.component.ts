import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEducationExperience } from './experience';

@Component({
    templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {
    errorMessage = '';
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

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

    }
}