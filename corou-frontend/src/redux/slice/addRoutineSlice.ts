import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoutineItem {
  step_name: string;
  description: string;
  item_key: number;
}

interface addRoutineState {
  title: string;
  gender: string[];
  skin: number;
  age: number;
  problem: number[];
  grade: number;
  routineItem: RoutineItem[];
  tag: string[];
}

const initialState: addRoutineState = {
  title: "",
  gender: [],
  skin: 0,
  age: 10,
  problem: [],
  grade: 1,
  routineItem: new Array(1).fill({ name: "", description: "", itemKey: 0 }),
  tag: [],
};

const addRoutineSlice = createSlice({
  name: "addRoutine",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setGender: (state, action: PayloadAction<string[]>) => {
      state.gender = action.payload;
    },
    setSkin: (state, action: PayloadAction<number>) => {
      state.skin = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setProblem: (state, action: PayloadAction<number[]>) => {
      state.problem = action.payload;
    },
    setGrade: (state, action: PayloadAction<number>) => {
      state.grade = action.payload;
    },
    setRoutineItem: (
      state,
      action: PayloadAction<{ index: number; item: RoutineItem }>
    ) => {
      state.routineItem[action.payload.index] = action.payload.item;
    },
    setTag: (state, action: PayloadAction<string[]>) => {
      state.tag = action.payload;
    },
  },
});

export const {
  setTitle,
  setGender,
  setSkin,
  setAge,
  setProblem,
  setGrade,
  setRoutineItem,
  setTag,
} = addRoutineSlice.actions;
export default addRoutineSlice.reducer;
