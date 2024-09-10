import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  API_GET_ONE_QUESTION,
  API_GET_ALL_QUESTION,
  AxiosInstance,
  GetAxiosInstance,
  PostAxiosInstance,
  API_PURCHASE_QUESTION,
} from "~/api/configApi";
import { questionActions } from "./questions.slice";
import { QuestionInfo } from "~/types";

export const getAllQuestion = createAsyncThunk(
  "question/getAll",
  async (user_token: string, { dispatch }) => {
    try {
      const req = await GetAxiosInstance(user_token).get(API_GET_ALL_QUESTION);

      dispatch(questionActions.setQuestions(req.data));
    } catch (error) {}
  }
);

export const getOneQusetion = createAsyncThunk(
  "question/getOne",
  async (
    data: {
      id: string;
      cb: (questionInfo: QuestionInfo) => void;
      user_token: string;
    },
    { dispatch }
  ) => {
    try {
      const { id, cb } = data;

      PostAxiosInstance(data.user_token);
      const req = await PostAxiosInstance(data.user_token).post(
        API_GET_ONE_QUESTION,
        JSON.stringify({ id })
      );

      const res = req.data;
      console.log(res);

      cb(res);
    } catch (error) {
      console.log(error);
    }
  }
);

export const purchaseQusetion = createAsyncThunk(
  "question/purchase",
  async (
    data: {
      id: string;
      cb: (questionInfo: QuestionInfo) => void;
      user_token: string;
    },
    { dispatch }
  ) => {
    try {
      const { id, cb } = data;

      PostAxiosInstance(data.user_token);
      const req = await PostAxiosInstance(data.user_token).post(
        API_PURCHASE_QUESTION,
        JSON.stringify({ question_id: id })
      );

      const res = req.data;
      console.log(res);

      cb(res);
    } catch (error) {
      console.log(error);
    }
  }
);

export const sendQuestionResult = createAsyncThunk(
  "question/sendResult",
  async (
    data: { id: string; cb: () => void; result: string; user_token: string },
    { dispatch }
  ) => {
    try {
      const { id, cb, result } = data;

      const req = await PostAxiosInstance(data.user_token).post(
        API_GET_ONE_QUESTION,
        {
          method: "POST",
          data: JSON.stringify({ result }),
        }
      );

      const res = req.data;
      cb();
    } catch (error) {}
  }
);
