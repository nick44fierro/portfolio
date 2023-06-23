import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
    errorMessage = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

    }
}