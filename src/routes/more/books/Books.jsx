import "./Books.css";
// import booksImages from "../../../assets/images/books_img.png";
import booksCardImages1 from "../../../assets/images/books_left1.png";
import booksCardImages2 from "../../../assets/images/books_left2.png";
import booksCardImages3 from "../../../assets/images/books_left3.png";
import booksCardImages4 from "../../../assets/images/books_left4.png";
import booksCardImages5 from "../../../assets/images/books_left5.png";
import booksCardImages6 from "../../../assets/images/books_left6.png";
import { useState } from "react";
const Books = () => {
  const [cardImages1, setCardImages1] = useState(true);
  const [cardImages2, setCardImages2] = useState(false);
  const [cardImages3, setCardImages3] = useState(false);
  const [cardImages4, setCardImages4] = useState(false);
  const [cardImages5, setCardImages5] = useState(false);
  const [cardImages6, setCardImages6] = useState(false);

  function imagesActive1() {
    setCardImages1(true);
    setCardImages2(false);
    setCardImages3(false);
    setCardImages4(false);
    setCardImages5(false);
    setCardImages6(false);
  }

  function imagesActive2() {
    setCardImages1(false);
    setCardImages2(true);
    setCardImages3(false);
    setCardImages4(false);
    setCardImages5(false);
    setCardImages6(false);
  }

  function imagesActive3() {
    setCardImages1(false);
    setCardImages2(false);
    setCardImages3(true);
    setCardImages4(false);
    setCardImages5(false);
    setCardImages6(false);
  }

  function imagesActive4() {
    setCardImages1(false);
    setCardImages2(false);
    setCardImages3(false);
    setCardImages4(true);
    setCardImages5(false);
    setCardImages6(false);
  }

  function imagesActive5() {
    setCardImages1(false);
    setCardImages2(false);
    setCardImages3(false);
    setCardImages4(false);
    setCardImages5(true);
    setCardImages6(false);
  }

  function imagesActive6() {
    setCardImages1(false);
    setCardImages2(false);
    setCardImages3(false);
    setCardImages4(false);
    setCardImages5(false);
    setCardImages6(true);
  }

  return (
    <div className="container">
      <div className="books_content">
        <h2 className="books_title">
          IELTS imtihonidan yuqori ball olish hali ham sizga muammomi? Easy
          IELTS to‘plami orqali IELTS’dan yuqori ballni qo‘lga kiritish vaqti
          keldi.
        </h2>

        <div className="books_content_group">
          <div className="books_left_content">
            <img
              className="books_left_images"
              src={booksCardImages1}
              alt="books_images"
              onClick={() => imagesActive1()}
            />
            <img
              className="books_left_images"
              src={booksCardImages2}
              alt="books_images"
              onClick={() => imagesActive2()}
            />
            <img
              className="books_left_images"
              src={booksCardImages3}
              alt="books_images"
              onClick={() => imagesActive3()}
            />
            <img
              className="books_left_images"
              src={booksCardImages4}
              alt="books_images"
              onClick={() => imagesActive4()}
            />
            <img
              className="books_left_images"
              src={booksCardImages5}
              alt="books_images"
              onClick={() => imagesActive5()}
            />
            <img
              className="books_left_images"
              src={booksCardImages6}
              alt="books_images"
              onClick={() => imagesActive6()}
            />
          </div>

          <div className="books_right_content">
            {cardImages1 ? (
              <img
                className="books_right_images"
                src={booksCardImages1}
                alt="books_images"
              />
            ) : null}

            {cardImages2 ? (
              <img
                className="books_right_images"
                src={booksCardImages2}
                alt="books_images"
              />
            ) : null}

            {cardImages3 ? (
              <img
                className="books_right_images"
                src={booksCardImages3}
                alt="books_images"
              />
            ) : null}
            {cardImages4 ? (
              <img
                className="books_right_images"
                src={booksCardImages4}
                alt="books_images"
              />
            ) : null}
            {cardImages5 ? (
              <img
                className="books_right_images"
                src={booksCardImages5}
                alt="books_images"
              />
            ) : null}
            {cardImages6 ? (
              <img
                className="books_right_images"
                src={booksCardImages6}
                alt="books_images"
              />
            ) : null}

            <div className="books_right_text_content">
              <p className="books_right_title">Easy IELTS to‘plami</p>
              <p className="books_right_text_one">
                6 ta to‘plamdan iborat. 4 ta asosiy, 2 ta qo‘shimcha. Bu
                kitoblar orqali oz fursatda chuqurroq va tezroq natijaga chiqa
                olasiz. Hozirda Chet tilini bilish darajasini bildiruvchi
                sertifikatlarga talab yuqori, hattoki Davlat idoralari
                lavozimlarida ishlovchi insonlar uchun ustama to‘lovlari ham
                beriladi. Nafaqat bu, balki istalgan jabhalarda aynan IELTS
                sertifikatlari kerak bo‘ladi.
              </p>
              <p className="books_right_text_one">
                Demak, ham vaqtingiz va mablag‘ingizni tejagan holda sinalgan
                usullar yordamida IELTS imtihonlardan yuqori ball olishni
                istasangiz Easy IELTS to‘plami aynan siz uchun.
              </p>
              <p className="books_right_text_one">
                To‘plamda IELTS imtihonda kerak bo‘ladigan:
              </p>

              <div className="books_right_line_text_div">
                <p className="books_right_line_text">
                  <span className="books_right_line"></span>Speaking
                </p>
                <p className="books_right_line_text">
                  <span className="books_right_line"></span>Reading
                </p>
                <p className="books_right_line_text">
                  <span className="books_right_line"></span>Writing
                </p>
              </div>

              <div className="books_right_bottom_text_group">
                <p className="books_right_text_one">
                  Listening bo‘yicha kitoblar va Telegram messenjerida alohida
                  yopiq kanallar mavjud.
                </p>
                <p className="books_right_text_one">Qo‘shimcha ravishda:</p>
                <p className="books_right_line_text">
                  <span className="books_right_line"></span> Articles — Ingliz
                  tilidagi maqolalar to‘plami.
                </p>
              </div>

              <button className="books_right_btn">Buyurtma berish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
