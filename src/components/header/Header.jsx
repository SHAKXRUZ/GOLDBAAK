import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/header_logo.png";
const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <img className="header_logo" src={Logo} alt="header_logo" />
        </Link>
        <ul className="item">
          <Link className="item_link" to="/">
            <li className="item_list">Asosiy</li>
          </Link>

          <Link className="item_link" to="/">
            <li className="item_list">Biz haqimizda</li>
          </Link>

          <Link className="item_link" to="/">
            <li className="item_list">Kitoblarimiz</li>
          </Link>

          <Link className="item_link" to="/">
            <li className="item_list">Aloqa</li>
          </Link>

          <Link className="item_link" to="/">
            <li className="item_list">Buyurtma berish</li>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
