export interface WorkExperience {
    jobTitle: string;
    company: string;
    location: string;
    startDate: Date | string;
    endDate?: Date | string;
    responsibilities: string;
  }
  
  export interface Education {
    degree: string;
    institution: string;
    location: string;
    graduationDate?: Date | string;
  }
  
  export interface Certification {
    name: string;
    issuingOrganization: string;
    dateObtained?: Date | string;
  }
  
  export interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  export interface ResumeData {
    title: string;
    summary: string;
    workExperience: WorkExperience[];
    education: Education[];
    skills: string[];
    certifications: Certification[];
    projects: Project[];
    languages: string[];
  }
  
  export type FormStep = 
    | 'basicInfo'
    | 'workExperience'
    | 'education'
    | 'skills'
    | 'certifications'
    | 'projects'
    | 'languages'
    | 'review';
  