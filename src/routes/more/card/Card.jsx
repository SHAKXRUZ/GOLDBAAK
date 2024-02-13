import "./Card.css";
import card1 from "../../../assets/video/card1.mp4";
import card2 from "../../../assets/video/card2.mp4";
import card3 from "../../../assets/video/card3.mp4";
const Card = () => {
  return (
    <div className="container">
      <div className="card_content">
        <div className="card">
          <video
            src={card3}
            autoPlay
            loop
            muted
            className="card_images"
          ></video>
          <h2 className="card_title">Xavfsiz to'lov tizimi</h2>
          <p className="card_text">
            Istalgan toʻlov usuli mavjud! To’lovni kitobni qabul qilgandan keyin
            amalga oshirish imkoniyati! Nasiyaga xarid qilish mumkun!
          </p>
        </div>
        <div className="card">
          <video
            src={card2}
            autoPlay
            loop
            muted
            className="card_images"
          ></video>
          <h2 className="card_title">Bepul yetkazib berish</h2>
          <p className="card_text">
            Istalgan toʻlov usuli mavjud! To’lovni kitobni qabul qilgandan keyin
            amalga oshirish imkoniyati! Nasiyaga xarid qilish mumkun!
          </p>
        </div>
        <div className="card">
          <video
            src={card1}
            autoPlay
            loop
            muted
            className="card_images"
          ></video>
          <h2 className="card_title">100% Kafolat</h2>
          <p className="card_text">
            Istalgan toʻlov usuli mavjud! To’lovni kitobni qabul qilgandan keyin
            amalga oshirish imkoniyati! Nasiyaga xarid qilish mumkun!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
