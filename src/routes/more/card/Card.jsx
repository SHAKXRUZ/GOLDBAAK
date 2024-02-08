import "./Card.css";
import card1 from "../../../assets/images/card1.png";
import card2 from "../../../assets/images/card2.png";
import card3 from "../../../assets/images/card3.png";
const Card = () => {
  return (
    <div className="container">
      <div className="card_content">
        <div className="card">
          <img src={card1} alt="card_images" className="card_images" />
          <h2 className="card_title">Xavfsiz to'lov tizimi</h2>
          <p className="card_text">
            Istalgan toʻlov usuli mavjud! To’lovni kitobni qabul qilgandan keyin
            amalga oshirish imkoniyati! Nasiyaga xarid qilish mumkun!
          </p>
        </div>
        <div className="card">
          <img src={card2} alt="card_images" className="card_images" />
          <h2 className="card_title">Bepul yetkazib berish</h2>
          <p className="card_text">
            Istalgan toʻlov usuli mavjud! To’lovni kitobni qabul qilgandan keyin
            amalga oshirish imkoniyati! Nasiyaga xarid qilish mumkun!
          </p>
        </div>
        <div className="card">
          <img src={card3} alt="card_images" className="card_images" />
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
