import { Piano, Typing , Login, QuestionPool , Question, RankingTable} from "../pages";

const routes = [
  {
    path: "/",
    component: Login,
    Private: false,
  },
  {
    path: "/Landing",
    component: QuestionPool,
    Private: false,
  },
  {
    path: "/Question/*",
    component: Question,
    Private: false,
  },
  {
    path: "/Piano",
    component: Piano,
    Private: false,
  },
  {
    path: "/TypingTest",
    component: Typing,
    Private: false,
  },
  {
    path: "/RankingTable",
    component: RankingTable,
    Private: false,
  },
];
  
  export default routes;
  