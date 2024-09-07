import styles from "./RankingTable.module.scss";
import { Header } from "~/components/Header/Header";
import image from "../../assets/images/روز برنامه نویس.png";
import first from "../../assets/images/1.png";
import second from "../../assets/images/2.png";
import third from "../../assets/images/3.png";
import star1 from "../../assets/images/11.png";
import star2 from "../../assets/images/22.png";
import star3 from "../../assets/images/33.png";
import star from "../../assets/images/Diamond star.png";

export const RankingTable = () => {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

 return <div className={styles.RankingTable}>
    <Header/>
    <div className={styles.body}>
      <div className={styles.upper}>
        <div className={styles.section}>
          <img src={image} className={styles.image} alt="" />
          <div className={styles.upperBox2}>
            <img src={second} className={styles.second} alt="" />
            <span className={styles.uppername}>نام گروه</span>
            <div className={styles.upperScore}>
              <span className={styles.upperText} style={{color: "#a0a0a0"}}>700</span>
              <img className={styles.star} src={star2} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <img src={image} className={styles.image} alt="" />
          <div className={styles.upperBox1}>
            <img src={first} className={styles.first} alt="" />
            <span className={styles.uppername}>نام گروه</span>
            <div className={styles.upperScore}>
              <span className={styles.upperText} style={{color: "#fc0"}}>1200</span>
              <img className={styles.star} src={star1} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <img src={image} className={styles.image} alt="" />
          <div className={styles.upperBox3}>
            <img src={third} className={styles.third} alt="" />
            <span className={styles.uppername}>نام گروه</span>
            <div className={styles.upperScore}>
              <span className={styles.upperText} style={{color: "#d9a962"}}>800</span>
              <img className={styles.star} src={star3} alt="" />
            </div>
           </div>
        </div>
      </div>
      <div className={styles.down}>
        <div className={styles.title}>
          <div className={styles.texts}>
              <div className={styles.titleText}>امتیاز</div>
              <div className={styles.titleText}>گروه</div>
              <div className={styles.titleText}>رتبه</div>
          </div>
          <div className={styles.Line}></div>
        </div>
        <div className={styles.ranks}>
          {numbers.map((number) => (
            <div className={styles.rankBox}>
                <div className={styles.inside}>
                  <div className={styles.part}>
                      <span className={styles.text} style={{width: "fit-content"}}>800</span>
                      <img className={styles.dimond} src={star} alt="" />
                  </div>
                  <span className={styles.text}>نام گروه</span>
                  <span className={styles.text}>{number}</span>
                </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
};
