import { Injectable } from "@angular/core";
import { IWorkExperience } from "./experience";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WorkExperienceService {
    [x: string]: any;
    workExperienceURL: string = "api/experiences/work-experiences.json";

    constructor(private http: HttpClient) { }

    getWorkExperiences(): Observable<IWorkExperience[]> {
        return this.http.get<IWorkExperience[]>(this.workExperienceURL).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
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