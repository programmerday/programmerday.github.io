import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GET_SCOREBOARD, AxiosInstance } from "~/api/configApi";
import { Question, Team } from "~/types";

export const getAllTeams = createAsyncThunk(
  "scoreboard/getAll",
  async (_, { dispatch }) => {
    try {
      const req = await AxiosInstance.get(API_GET_SCOREBOARD);

      const res = req.data;

      dispatch(scoreBoardActions.setTeams(res));
    } catch (error) {}
  }
);

const initialState: { teams: Team[] } = { teams: [] };

const scoreBoardSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setTeams(state, action: PayloadAction<Team[]>) {
      state.teams = action.payload;
    },
  },
});

export const scoreBoardActions = {
  ...scoreBoardSlice.actions,
  getAllTeams,
};
export const scoreBoardReducer = scoreBoardSlice.reducer;
