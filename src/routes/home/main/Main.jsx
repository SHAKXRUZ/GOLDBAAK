import "./Main.css";
// import MainImages1 from "../../../assets/images/main_img1.png";
// import MainImages2 from "../../../assets/images/main_img2.png";
// import MainImages3 from "../../../assets/images/main_img3.png";
// import MainImages4 from "../../../assets/images/main_img4.png";
// import MainImagesOne from "../../../assets/images/main_images.png";
// import MainImagesTwo from "../../../assets/images/main_background_images.png";
// import MainImagesOneMedia from "../../../assets/images/main_media_images.png";
// import MainImagesTwoMedia from "../../../assets/images/main_media_images_two.png";

import mainCardImages1 from "../../../assets/images/main_img1.png";
import mainCardImages2 from "../../../assets/images/main_img2.png";
import mainCardImages3 from "../../../assets/images/main_img3.png";
import mainCardImages4 from "../../../assets/images/main_img4.png";
import mainRightImages from "../../../assets/images/hero_images.png";
import mainRightImagesTwo from "../../../assets/images/hero_background_images.png";
import mainRightImagesMediaOne from "../../../assets/images/main_media_images.png";
import mainRightImagesMediaTwo from "../../../assets/images/main_media_images_two.png";
const Main = () => {
  return (
    <div className="container">
      <main className="main">
        <div className="main_left">
          <h1 className="main_left_title">
            Eshitish orqali 90 kunda Ingliz tilini o‘rganing yoki pulingizni
            qaytarib oling!
          </h1>
          <p className="main_left_text">
            Gold Book kitoblari – maxsus 40 ta darslar yig‘indisidan tashkil
            topgan to‘plam bo‘lib, faqatgina eshitish orqali 3 oy ichida sizning
            ingliz tilini o‘rganishingizga eng kerakli va asosiy bilimlarni
            o‘rganishingizni ta’minlaydi.
          </p>
          <button className="main_btn">Buyurtma berish</button>
          <div className="main_left_bottom_img_group">
            <div className="main_card_images_div">
              <img
                className="main_card_images"
                src={mainCardImages1}
                alt="main_images"
              />
              <img
                className="main_card_images"
                src={mainCardImages2}
                alt="main_images"
              />
              <img
                className="main_card_images"
                src={mainCardImages3}
                alt="main_images"
              />
              <img
                className="main_card_images"
                src={mainCardImages4}
                alt="main_images"
              />
            </div>
            <div className="main_left_bottom_text_group">
              <p className="main_left_bottom_title">1,000 +</p>
              <p className="main_left_bottom_text">mijozlar tanlovi</p>
            </div>
          </div>
        </div>

        <div className="main_right">
          <img
            className="main_right_images"
            src={mainRightImages}
            alt="main_right_images"
          />
          <img
            className="main_right_images_two"
            src={mainRightImagesTwo}
            alt=""
          />
        </div>

        <div className="main_right_media">
          <img
            className="main_right_images_media_one"
            src={mainRightImagesMediaOne}
            alt="main_right_images"
          />
          <img
            className="main_right_images_media_two"
            src={mainRightImagesMediaTwo}
            alt="main_images"
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
