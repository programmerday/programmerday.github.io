import { useEffect } from "react";
import styles from "./QuestionPool.module.scss";
import { Header } from "~/components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "~/store/questions.slice";
import { RootState, AppDispatch } from "~/store";
import { QuestionBox } from "~/components";

export const QuestionPool = () => {
  const { questions } = useSelector((state: RootState) => state.questions);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(questionActions.getAllQuestion());
  }, []);

  return (
    <div className={styles.QuestionPool}>
      <Header />
      <div className={styles.body}>
        {questions.map((question, index) => (
          <QuestionBox key={question.id} {...question} number={index} />
        ))}
      </div>
    </div>
  );
};
