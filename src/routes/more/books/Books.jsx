import "./Books.css";
import booksImages from "../../../assets/images/books_img.png";
import Books1 from "../../../assets/images/books1.png";
import Books2 from "../../../assets/images/books2.png";
import Books3 from "../../../assets/images/books3.png";
import Books4 from "../../../assets/images/books4.png";
import Books5 from "../../../assets/images/books5.png";
import Books6 from "../../../assets/images/books6.png";
const Books = () => {
  return (
    <div className="container">
      <div className="books">
        <h1 className="books_title">
          IELTS imtihonidan yuqori ball olish hali ham sizga muammomi? Easy
          IELTS to‘plami orqali IELTS’dan yuqori ballni qo‘lga kiritish vaqti
          keldi.
        </h1>
        <div className="books_content">
          <div className="books_left">
            <img className="books_images" src={Books1} alt="books_images" />
            <img className="books_images" src={Books2} alt="books_images" />
            <img className="books_images" src={Books3} alt="books_images" />
            <img className="books_images" src={Books4} alt="books_images" />
            <img className="books_images" src={Books5} alt="books_images" />
            <img className="books_images" src={Books6} alt="books_images" />
          </div>
          <div className="books_right">
            <img
              className="books_images_card"
              src={booksImages}
              alt="books_images"
            />
            <div className="books_text_content">
              <p className="books_text_content_title">Easy IELTS to‘plami</p>
              <p className="books_text_content_one">
                6 ta to‘plamdan iborat. 4 ta asosiy, 2 ta qo‘shimcha. Bu
                kitoblar orqali oz fursatda chuqurroq va tezroq natijaga chiqa
                olasiz. Hozirda Chet tilini bilish darajasini bildiruvchi
                sertifikatlarga talab yuqori, hattoki Davlat idoralari
                lavozimlarida ishlovchi insonlar uchun ustama to‘lovlari ham
                beriladi. Nafaqat bu, balki istalgan jabhalarda aynan IELTS
                sertifikatlari kerak bo‘ladi
              </p>

              <p className="books_text_content_one">
                Demak, ham vaqtingiz va mablag‘ingizni tejagan holda sinalgan
                usullar yordamida IELTS imtihonlardan yuqori ball olishni
                istasangiz Easy IELTS to‘plami aynan siz uchun.
              </p>

              <p className="books_text_content_one">
                To‘plamda IELTS imtihonda kerak bo‘ladigan:
              </p>
              <p className="books_text_content_one">
                <span> Speaking</span>
                <span>Reading</span>
                <span> Writing</span>
              </p>
              <p className="books_text_content_one">
                Listening bo‘yicha kitoblar va Telegram messenjerida alohida
                yopiq kanallar mavjud. Qo‘shimcha ravishda: Articles — Ingliz
                tilidagi maqolalar to‘plami.
              </p>
            </div>
            <button className="books_btn">Buyurtma berish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
