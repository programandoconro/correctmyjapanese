import { Change } from "diff";
export type DashboardData = {
  key: string;
  name: string;
  corrected: string;
  manuscript: string;
  correction?: string;
  studentUid: string;
};
export type UserType = {
  name: string;
  uid: string;
};
export type AuthType = {
  isLogin: boolean;
  user: UserType;
};

export type DataStudent = {
  studentUid: string;
  student: string;
  corrected: boolean;
  manuscript: string;
};

export interface Manuscript {
  dataStudent: DataStudent;
}
export type DataTeacher = {
  teacherUid: string;
  teacher: string;
  correction?: string;
  manuscriptToCorrect: string;
  itemKey: number;
  studentName: string;
  studentToCorrectUid: string;
};

export interface Correction {
  dataTeacher: DataTeacher;
}
export interface Differences extends Manuscript, Correction {
  differences?: Change[];
}
