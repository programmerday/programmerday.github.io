import styles from "./QuestionPool.module.scss";
import { Header } from "~/components/Header/Header";
export const QuestionPool = () => {
  const numbers = Array.from({ length: 60 }, (_, i) => i + 1);

  return <div className={styles.QuestionPool}>
    <Header/>
    <div className={styles.body}>
      
    {numbers.map((number) => (
        <div className={styles.button} key={number}><span className={styles.num}>{number}</span></div>
      ))}
    </div>
  </div>;
};
