import { Injectable } from "@angular/core";
import { IEducationExperience } from "./experience";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EducationExperienceService {
    [x: string]: any;
    educationExperienceURL: string = "api/experiences/education-experiences.json";

    constructor(private http: HttpClient) { }

    getWorkExperiences(): Observable<IEducationExperience[]> {
        return this.http.get<IEducationExperience[]>(this.educationExperienceURL).pipe(
            //tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = "";

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(() => errorMessage);
    }
}