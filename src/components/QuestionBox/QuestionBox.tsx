import { FC } from "react";
import styles from "./QuestionBox.module.scss";
import { Question } from "~/types";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store";
import { questionActions } from "~/store/questions.slice";

export const QuestionBox: FC<Question & { number: number }> = (props) => {
  const { token } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const clickHandler = () => {
    dispatch(
      questionActions.purchaseQusetion({
        user_token: token,
        id: props.id,
        cb: () => {},
      })
    );
  };

  return (
    <Link
      className={clsx(styles.QuestionBox, {
        [styles.isActive]: props.isActive,
        [styles.isPurchased]: props.isPurchased,
        [styles.isAnswerd]: props.isAnswerd,
      })}
      onClick={clickHandler}
      to={`${props.number}`}
    >
      {props.number}
    </Link>
  );
};
