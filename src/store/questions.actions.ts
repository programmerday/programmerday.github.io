import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  API_GET_ONE_QUESTION,
  API_GET_ALL_QUESTION,
  GET_CONFIG,
  POST_CONFIG,
} from "~/api/configApi";
import { questionActions } from "./questions.slice";
import { QuestionInfo } from "~/types";

export const getAllQuestion = createAsyncThunk(
  "question/getAll",
  async (_, { dispatch }) => {
    try {
      const req = await axios.get(API_GET_ALL_QUESTION, GET_CONFIG("", ""));

      const res = req.data;

      dispatch(questionActions.setQuestions(res));
    } catch (error) {}
  }
);

export const getOneQusetion = createAsyncThunk(
  "question/getOne",
  async (
    data: { id: number; cb: (questionInfo: QuestionInfo) => void },
    { dispatch }
  ) => {
    try {
      const { id, cb } = data;

      const req = await axios.get(API_GET_ONE_QUESTION(id), GET_CONFIG("", ""));

      const res = req.data;

      dispatch(questionActions.setQuestions(res));
    } catch (error) {}
  }
);

export const sendQuestionResult = createAsyncThunk(
  "question/sendResult",
  async (
    data: { id: number; cb: () => void; result: string },
    { dispatch }
  ) => {
    try {
      const { id, cb, result } = data;

      const req = await axios.post(API_GET_ONE_QUESTION(id), {
        ...POST_CONFIG(""),
        data: JSON.stringify({ result }),
      });

      const res = req.data;
      cb();
    } catch (error) {}
  }
);
