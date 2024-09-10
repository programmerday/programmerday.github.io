import { configureStore } from "@reduxjs/toolkit";
import { questionReducer } from "./questions.slice";
import { authReducer } from "./auth.slice";
import { scoreBoardReducer } from "./score-board.slice";
import { profileReducer } from "./profile.slice";

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    auth: authReducer,
    scoreBoard: scoreBoardReducer,
    profile: profileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
