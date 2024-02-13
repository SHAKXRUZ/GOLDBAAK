import "./About.css";
import AboutImages from "../../../assets/video/about_images.mp4";
import aboutBeforeImages from "../../../assets/images/about_right_before.png";
const About = () => {
  return (
    <div className="container">
      <div className="about_content">
        <h1 className="about_title">Biz haqimizda</h1>
        <div className="about_cards_group">
          <div className="about_left_content">
            <div className="about_left_one_text_group">
              <p className="about_one_text">Xush kelibsiz!</p>
              <p className="about_one_text">
                "Gold book" kompaniyasi sizga chet tillarini mustaqil o‘rganish
                uchun qiziqarli sayohatga sho‘ng‘ish imkoniyatini taklif qiladi!
              </p>
              <p className="about_one_text">
                "Gold book" jamoasi sizning o‘quv jarayoningizni qulay va
                qiziqarli qilish niyatida. Eshitish orqali samarali va sodda
                usulda tarkib topgan kitoblar bilan til o‘rganish zavqli
                jarayonga aylanmoqda.
              </p>
            </div>

            <div className="about_left_two_text_group">
              <p className="about_two_text">
                Bizning kitoblarimiz tillarga bo‘lgan muhabbatingizni yanada
                alangalatgan holda sizning qulayligingiz haqida qayg‘uradi.
                Sizning darajangizdan qat’i nazar — boshlang‘ichdan
                ilg‘orgacha-bu yerda sizni ilhomlantiradigan noodatiy uslublar
                mavjud. Sizning til o‘rganish bilan bog‘liq maqsadlaringizga
                erishishda yordam beradigan materiallarni ayni damda "Gold book"
                kitoblaridan topasiz.
              </p>
              <p className="about_two_text">
                Biz ta’lim kuchiga ishonamiz va har bir inson yangi tilni
                o‘rganishga qodir ekanligiga aminmiz. Shunday qilib, biz sizga
                eng yaxshi manbalarni taqdim etish uchun yetakchi mualliflar va
                nashriyotlarning kitoblaridan foydalandik. Biz bilan bor yog‘i 3
                oyda samarali usullar orqali, sifatli bilimga ega bo‘lasiz. Siz
                uchun ingliz tili, turk tili, rus tillari hamda "EASY IELTS "
                kitoblarni sizga taqdim etamiz.
              </p>
              <p className="about_two_text">
                "Gold book" kitoblari bilan o‘zingiz xohlagan tilni tanlang. Va
                til cho‘qqisini zabt eshishingizda sizga kitoblarimiz asqatadi.
              </p>
              <p className="about_two_text">
                Bilimni qadrlaydiganlar va kitobsevarlar uchun maxsus qo‘llanma!
              </p>
            </div>
          </div>
          <div className="about_right_content">
            <img
              className="about_images_before"
              src={aboutBeforeImages}
              alt="about_images"
            />
            <video
              src={AboutImages}
              autoPlay
              muted
              loop
              className="about_images"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
