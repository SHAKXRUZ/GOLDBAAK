import "./Footer.css";
import LocationImages from "../../assets/images/footer_location_images.png";
import footerLogo from "../../assets/images/header_logo.png";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer_content">
          <div className="footer_left">
            <div className="footer_card">
              <p className="footer_card_title">Aloqa uchun:</p>
              <div className="footer_card_contact">
                <p className="footer_card_text">Telefon raqamlari: </p>
                <div className="footer_number_div">
                  <a className="footer_card_number" href="tel:+998995926600">
                    +998 99 592 66 00
                  </a>
                  <a className="footer_card_number" href="tel:+998995824000">
                    +998 99 582 40 00
                  </a>
                </div>
              </div>
            </div>
            <div className="footer_card">
              <p className="footer_card_title">Manzil:</p>
              <p className="footer_card_location_text">
                Toshkent sh. Yunusobot <br /> tumani, Osiyo 6.
              </p>
            </div>
          </div>
          <Link to="/" className="footer_card">
            <img
              className="location_images"
              src={LocationImages}
              alt="images"
            />
          </Link>
          <div className="footer_card">
            <img className="footer_logo" src={footerLogo} alt="footer_logo" />
            <div className="footer_card_icons">
              <a className="footer_icon" href="/">
                <PiTelegramLogoBold />
              </a>
              <a className="footer_icon" href="/">
                <FaInstagram />
              </a>
              <a className="footer_icon" href="/">
                <FiFacebook />
              </a>
            </div>
          </div>
          <p className="footer_bottom_text">© 2024 All right reserved</p>
        </div>
        <p className="footer_bottom_text_media">© 2024 All right reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
