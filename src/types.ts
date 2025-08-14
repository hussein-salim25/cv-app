// -----------------------
// Types for CV Builder
// -----------------------

export interface PersonalDetails {
  name: string;
  email: string;
  phone: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Skills {
  skills: string[];
}

export interface Referee {
  name: string;
  position: string;
  contact: string;
}

export interface CvData {
  personalDetails: PersonalDetails;
  personalSummary: string; // new
  skills: Skills;
  experience: Experience[];
  education: Education[];
  referees: Referee[]; // new
}

// -----------------------
// Customization Types
// -----------------------

export type CustomizationFields = "layout" | "font" | "color";

export interface CustomizationProps {
  layout: "single-column" | "two-column" | "grid";
  font: "sans" | "serif" | "mono";
  color: string;
  onChange: (field: CustomizationFields, value: any) => void;
}
