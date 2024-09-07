import styles from "./Header.module.scss";
import bale from "../../assets/images/لوگو ترنسپرنت.png"
import profile from "../../assets/images/روز برنامه نویس.png"
import star from "../../assets/images/Diamond star.png"
import key from "../../assets/images/key-svgrepo-com (1) 1.png"
export const Header = () => {
  return <div className={styles.Header} dir="rtl">
    <div className={styles.right}>
        <div className={styles.logo}>
            <img className={styles.image} src={bale} width={28} alt="" />
            <div>
            <span className={styles.txt}>کارزار</span>
            <span className={styles.textstyle1}>بله</span>
            </div>
        </div>
        <div className={styles.parts}>
            <div className={styles.part}>سوالات</div>
            <div className={styles.part} onClick={()=> window.location.href = "/RankingTable"}>جدول امتیازات</div>
        </div>
    </div>
    <div className={styles.left}>
        <div className={styles.button}>
            <img className={styles.icon} src={key} alt="" />
            <div className={styles.txt1}>6</div>
        </div>
        <div className={styles.button}>
            <img className={styles.icon} src={star} alt="" />
            <div className={styles.txt1}>800</div>
        </div>
        <img src={profile} className={styles.profileImg} alt="" />
    </div>
  </div>;
};
