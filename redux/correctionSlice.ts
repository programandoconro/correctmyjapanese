import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Change } from "diff";
import {
  Manuscript,
  Correction,
  Differences,
  DataStudent,
  DataTeacher,
} from "../utils/types";

const initialManuscript: Manuscript = {
  dataStudent: {
    studentUid: "",
    student: "",
    corrected: false,
    manuscript: "",
  },
};

const initialCorrection: Correction = {
  dataTeacher: {
    teacher: "",
    teacherUid: "",
    correction: "",
    manuscriptToCorrect: "",
    itemKey: 0,
    studentName: "",
    studentToCorrectUid: "",
  },
};
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
