import "./Main.css";
import MainImages1 from "../../../assets/images/main_img1.png";
import MainImages2 from "../../../assets/images/main_img2.png";
import MainImages3 from "../../../assets/images/main_img3.png";
import MainImages4 from "../../../assets/images/main_img4.png";
import MainImagesOne from "../../../assets/images/main_images.png";
import MainImagesTwo from "../../../assets/images/main_background_images.png";

import MainImagesOneMedia from "../../../assets/images/main_media_images.png";
import MainImagesTwoMedia from "../../../assets/images/main_media_images_two.png";

const Main = () => {
  return (
    <div className="container">
      <main className="main">
        <div className="main_left_content">
          <h1 className="main_title">
            Eshitish orqali 90 kunda Ingliz tilini o‘rganing yoki pulingizni
            qaytarib oling!
          </h1>
          <p className="main_text">
            Gold Book kitoblari – maxsus 40 ta darslar yig‘indisidan tashkil
            topgan to‘plam bo‘lib, faqatgina eshitish orqali 3 oy ichida sizning
            ingliz tilini o‘rganishingizga eng kerakli va asosiy bilimlarni
            o‘rganishingizni ta’minlaydi.
          </p>
          <button className="main_btn">Buyurtma berish</button>
          <div className="main_left_bottom_images_group">
            <div className="main_left_img_group">
              <img
                className="main_bottom_images"
                src={MainImages1}
                alt="main_images"
              />
              <img
                className="main_bottom_images"
                src={MainImages2}
                alt="main_images"
              />
              <img
                className="main_bottom_images"
                src={MainImages3}
                alt="main_images"
              />
              <img
                className="main_bottom_images"
                src={MainImages4}
                alt="main_images"
              />
            </div>
            <div className="main_left_text_group">
              <p className="main_bottom_text1">1,000 +</p>
              <p className="main_bottom_text2">mijozlar tanlovi</p>
            </div>
          </div>
        </div>
        <div className="main_right_content">
          <img
            className="main_images_one"
            src={MainImagesOne}
            alt="main_images"
          />
          <img
            className="main_images_two"
            src={MainImagesTwo}
            alt="main_images"
          />

          <img
            className="main_images_one_media"
            src={MainImagesOneMedia}
            alt="main_images"
          />
          <img
            className="main_images_two_media"
            src={MainImagesTwoMedia}
            alt="main_images"
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
