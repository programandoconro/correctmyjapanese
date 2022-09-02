import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Change } from "diff";

export type DataStudent = {
  studentUid: string;
  student: string;
  corrected: boolean;
  manuscript: string;
};

export interface Manuscript {
  dataStudent: DataStudent;
}

const initialManuscript: Manuscript = {
  dataStudent: {
    studentUid: "",
    student: "",
    corrected: false,
    manuscript: "",
  },
};

export type DataTeacher = {
  teacherUid: string;
  teacher: string;
  correction: string;
};

export interface Correction {
  dataTeacher: DataTeacher;
}
const initialCorrection: Correction = {
  dataTeacher: {
    teacher: "",
    teacherUid: "",
    correction: "",
  },
};
export interface Differences extends Manuscript, Correction {
  differences?: Change[];
}
const initialDifferences: Differences = {
  ...initialManuscript,
  ...initialCorrection,
  differences: [{ added: false, count: 0, removed: false, value: "" }],
};

export const manuscriptSlice = createSlice({
  name: "manuscript",
  initialState: initialManuscript,
  reducers: {
    setManuscript: (state: Manuscript, action: PayloadAction<DataStudent>) => {
      state.dataStudent = action.payload;
    },
  },
});

export const correctionSlice = createSlice({
  name: "correction",
  initialState: initialCorrection,
  reducers: {
    setCorrection: (state: Correction, action: PayloadAction<DataTeacher>) => {
      state.dataTeacher = action.payload;
    },
  },
});
export const differencesSlice = createSlice({
  name: "differences",
  initialState: initialDifferences,
  reducers: {
    setDifferences: (state: Differences, action: PayloadAction<Change[]>) => {
      state.differences = action.payload;
    },
  },
});

export const { setManuscript } = manuscriptSlice.actions;
export const { setCorrection } = correctionSlice.actions;
export const { setDifferences } = differencesSlice.actions;
