import "./Customers.css";
import Card1 from "../../../assets/images/card1.png";
import Card2 from "../../../assets/images/card2.png";
import Card3 from "../../../assets/images/card3.png";
import Card4 from "../../../assets/images/card4.png";
const Customers = () => {
  return (
    <div className="container">
      <div className="cards">
        <h1 className="cards_title">Mijozlarning fikrlari</h1>
        <div className="card_group">
          <div className="card">
            <img className="cards_images" src={Card1} alt="card_images" />
          </div>
          <div className="card">
            <img className="cards_images" src={Card2} alt="card_images" />
          </div>
          <div className="card">
            <img className="cards_images" src={Card3} alt="card_images" />
          </div>
          <div className="card">
            <img className="cards_images" src={Card4} alt="card_images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
