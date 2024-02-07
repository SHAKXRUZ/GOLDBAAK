import "./Book.css";
import BookTopImages from "../../../assets/images/book_top_images.png";
import Book1 from "../../../assets/images/book1.png";
import Book2 from "../../../assets/images/book2.png";
import Book3 from "../../../assets/images/book3.png";
import Book4 from "../../../assets/images/book4.png";
import Book5 from "../../../assets/images/book5.png";
import BookBottomImages from "../../../assets/images/book_bottom_images.png";
import { Link } from "react-router-dom";
const Book = () => {
  return (
    <div className="container">
      <div className="book_content">
        <div className="book_top">
          <h1 className="book_top_title">Kitoblarimiz</h1>

          <div className="book_top_content">
            <div className="book_top_left">
              <p className="book_top_left_title">GoldBook kitoblari</p>
              <p className="book_top_left_text">
                Ayni shu vaziyatda ingliz tilini 3 oyda 0 dan o‘rganish uchun
                Gold Book kitoblarini tanlashadi. Chunki ushbu kitob eshitib
                o‘rganish uchun juda qulay
              </p>
              <Link to="/more">
                <button className="book_top_left_btn">Ko’proq ma’lumot</button>
              </Link>
            </div>
            <img src={BookTopImages} className="book_top_right" alt="book" />
          </div>
        </div>






        <div className="book_bottom_content">
          <div className="book_bottom_left">
            <img
              className="book_bottom_card_images"
              src={Book1}
              alt="book_images"
            />
            <img
              className="book_bottom_card_images"
              src={Book2}
              alt="book_images"
            />
            <img
              className="book_bottom_card_images"
              src={Book3}
              alt="book_images"
            />
            <img
              className="book_bottom_card_images"
              src={Book4}
              alt="book_images"
            />
            <img
              className="book_bottom_card_images"
              src={Book5}
              alt="book_images"
            />
          </div>
          <div className="book_bottom_right">
            <img
              src={BookBottomImages}
              className="book_bottom_images"
              alt="book_bottom_images"
            />
            <div className="book_bottom_text_content">
              <p className="book_top_left_title">Easy IELTS to‘plami</p>
              <p className="book_top_left_text">
                6 ta to‘plamdan iborat. 4 ta asosiy, 2 ta qo‘shimcha. Bu
                kitoblar orqali oz fursatda chuqurroq va tezroq natijaga chiqa
                olasiz
              </p>
              <Link to="/more">
                <button className="book_top_left_btn">Ko’proq ma’lumot</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
