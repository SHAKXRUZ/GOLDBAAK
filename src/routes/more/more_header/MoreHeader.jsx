import "./MoreHeader.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/header_logo.png";
const MoreHeader = () => {
  return (
    <div className="container">
      <header className="more_header">
        <Link to="/">
          <img className="more_header_logo" src={Logo} alt="header_logo" />
        </Link>
        <ul className="more_item">
          <Link className="more_item_link" to="/">
            <li className="more_item_list">Asosiy</li>
          </Link>

          <Link className="more_item_link" to="/">
            <li className="more_item_list">Biz haqimizda</li>
          </Link>

          <Link className="more_item_link" to="/">
            <li className="more_item_list">Kitoblarimiz</li>
          </Link>

          <Link className="more_item_link" to="/">
            <li className="more_item_list">Aloqa</li>
          </Link>

          <Link className="more_item_link" to="/">
            <li className="more_item_list">Buyurtma berish</li>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default MoreHeader;
