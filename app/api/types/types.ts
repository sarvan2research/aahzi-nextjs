export interface CollegeListType {
  collegeCode: number;
  collegeName: string;
  cutoffDetailsList: {
    courseCode: string;
    courseName: string;
    year: number;
    cutOffOC: number | null;
    cutOffBC: number | null;
    cutOffBCM: number | null;
    cutOffMBC: number | null;
    cutoffMBCDNC: number | null;
    cutoffMBCV: number | null;
    cutOffSC: number | null;
    cutOffST: number | null;
    cutOffSCA: number | null;
  }[];
}
