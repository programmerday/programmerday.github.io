import {
  Piano,
  Typing,
  Login,
  QuestionPool,
  Question,
  ScoreBoard,
} from "../pages";

const routes = [
  {
    path: "/",
    component: Login,
    Private: false,
  },
  {
    path: "/questions",
    component: QuestionPool,
    Private: false,
  },
  {
    path: "/question/:id",
    component: Question,
    Private: true,
  },
  {
    path: "/piano",
    component: Piano,
    Private: true,
  },
  {
    path: "/typing",
    component: Typing,
    Private: true,
  },
  {
    path: "/score-board",
    component: ScoreBoard,
    Private: true,
  },
];

export default routes;
