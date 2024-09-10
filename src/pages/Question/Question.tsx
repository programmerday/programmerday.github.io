import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState } from "~/store";

import styles from "./Question.module.scss";

import { Header } from "~/components/Header/Header";

import fullStar from "~/assets/images/پر.png";
import emptyStar from "~/assets/images/خالی.png";
import image from "~/assets/images/روز برنامه نویس.png";
import { Question as QuestionType, QuestionInfo } from "~/types";
import { questionActions } from "~/store/questions.slice";
import { Loading } from "~/components";

export const Question = () => {
  const { questions } = useSelector((state: RootState) => state.questions);
  const { id } = useParams();
  const [questionInfo, setQuestionInfo] = useState<QuestionInfo | null>(null);
  const [result, setResult] = useState<string>("");
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const { token } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const question = questions.find((_, index) => index + 1 === +id!);

    console.log(question);
    if (question?.id) {
      setQuestion(question);
      const cb = (questionInfo: QuestionInfo) => setQuestionInfo(questionInfo);
      dispatch(
        questionActions.getOneQusetion({
          id: question.id,
          cb,
          user_token: token,
        })
      );
    }
  }, [questions, id]);

  const handleSubmit = () => {
    const cb = () => {};
    if (id) {
      dispatch(
        questionActions.sendQuestionResult({
          id: question?.id ?? "1",
          result,
          cb,
        })
      );
    }
  };

  const handleChangeResult = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setResult(value);
  };

  return (
    <div className={styles.Question} dir="rtl">
      <Header />
      {!questionInfo ? (
        <Loading />
      ) : (
        <div className={styles.body}>
          <div className={styles.QuestionBox}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className={styles.TitleBar}>
                <div className={styles.QuestionTitle}>
                  {questionInfo?.title}
                </div>
                <div className={styles.QuestionOther}>
                  <div className={styles.category}>
                    <span className={styles.categoryText}>درجه سختی</span>
                    <div className={styles.StarBox}>
                      {Array(questionInfo.level)
                        .fill(0)
                        .map((_, index) => (
                          <img
                            src={
                              index > questionInfo.level ? emptyStar : fullStar
                            }
                            className={styles.icon}
                            alt=""
                          />
                        ))}
                    </div>
                  </div>
                  <div className={styles.category}>
                    <span className={styles.categoryText}>سوال </span>
                    <span className={styles.greenText}>
                      {questionInfo.isStarred ? "طلایی" : "عادی"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.Line} />
            </div>
            <span className={styles.QuestionText}>{questionInfo?.text}</span>
            <div className={styles.assets}>
              <div className={styles.assetBox}>
                <img className={styles.assetImg} src={image} alt="" />
                <span className={styles.assetText}>fileName.png</span>
              </div>
              <div className={styles.assetBox}>
                <img className={styles.assetImg} src={image} alt="" />
                <span className={styles.assetText}>fileName.png</span>
              </div>
            </div>
            <div className={styles.SubmitBar}>
              <input
                className={styles.SubmitBox}
                type="text"
                placeholder="پاسخ خود را وارد کنید"
                onChange={handleChangeResult}
              />
              <div className={styles.Submit}>
                <button className={styles.SubmitTxt} onClick={handleSubmit}>
                  ثبت
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
