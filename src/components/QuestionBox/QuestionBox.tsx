import { FC } from "react";
import styles from "./QuestionBox.module.scss";
import { Question } from "~/types";
import { Link } from "react-router-dom";

export const QuestionBox: FC<Question & { number: number }> = (props) => {
  return (
    <div className={styles.QuestionBox}>
      <Link to={`${props.number}`}>{props.number}</Link>
    </div>
  );
};
