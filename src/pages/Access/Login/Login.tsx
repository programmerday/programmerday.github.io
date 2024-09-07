import styles from "./Login.module.scss";
import user from "../../../assets/images/user-svgrepo-com.png";
import key from "../../../assets/images/key-svgrepo-com.svg";

export const Login = () => {
  return <div className={styles.Login} dir="rtl">
    <div className={styles.Container}>
      <div className={styles.Header}>
        <span className={styles.text1}>
          وارد حساب گروه خود شوید
          <span className={styles.textstyle1}>.</span>
        </span>
        <span className={styles.text2}>
        اطلاعات ورود خود را نمی‌دانید؟  
        <span className={styles.textstyle1}>  به برگزارکنندگان مسابقه مراجعه کنید.</span>
        </span>
      </div>
      <div className={styles.inputes}>
        <div className={styles.box}>
          <span className={styles.inputtext}>نام کاربری</span>
          <img className={styles.image} src={user} alt="" />
        </div>
        <div className={styles.box}>
        <span className={styles.inputtext}>رمز عبور</span>
        <img className={styles.image} src={key} alt="" />

        </div>
        <div className={styles.button}>
          <span className={styles.submitText}>ورود</span>
        </div>
      </div>
    </div>
  </div>;
};
