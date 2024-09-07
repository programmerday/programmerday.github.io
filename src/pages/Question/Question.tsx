import styles from "./Question.module.scss";
import { Header } from "~/components/Header/Header";
import fullStar from "../../assets/images/پر.png";
import emptyStar from "../../assets/images/خالی.png";
import image from "../../assets/images/روز برنامه نویس.png"

export const Question = () => {
  return <div className={styles.Question} dir="rtl">
    <Header/>
    <div className={styles.body}>
      <div className={styles.QuestionBox}>
        <div style={{display: "flex" ,flexDirection: "column", gap: 12}}>
        <div className={styles.TitleBar}>
          <div className={styles.QuestionTitle}>نام سوال</div>
          <div className={styles.QuestionOther}>
            <div className={styles.category}>
              <span className={styles.categoryText}>درجه سختی</span>
              <div className={styles.StarBox}>
              <img src={emptyStar} className={styles.icon} alt="" />
              <img src={fullStar} className={styles.icon} alt="" />
              <img src={fullStar} className={styles.icon} alt="" />
              </div>
            </div>
            <div className={styles.category}>
              <span className={styles.categoryText}>سوال </span>
              <span className={styles.greenText}>عادی</span>
            </div>
          </div>

        </div> 
        <div className={styles.Line}/>
        </div>
        <span className={styles.QuestionText}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </span>
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
            <input className={styles.SubmitBox} type="text" placeholder="پاسخ خود را وارد کنید" />
            <div className={styles.Submit}><span className={styles.SubmitTxt}>ثبت</span></div>
        </div>
      </div>
    </div>
  </div>;
};
