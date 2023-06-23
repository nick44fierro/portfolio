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
  errorMessage = '';

  ngOnInit(): void {

  }
}
