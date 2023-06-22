export interface IExperience {
    start: string;
    end: string;
    location: string;
    description: string;
}

export interface IWorkExperience extends IExperience {
    title: string;
    company: string;
}

export interface IEducationExperience extends IExperience {
    school: string;
    degreeType: string;
    areaOfStudy: string;
}