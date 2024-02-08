import "./Footer.css";
import LocationImages from "../../assets/images/footer_location_images.png";
import footerLogo from "../../assets/images/header_logo.png";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer_content">
          <div className="footer_left_content">
            <div className="footer_left_content_one">
              <p className="footer_left_title_one">Aloqa uchun:</p>
              <div className="footer_left_phone_div">
                <p className="footer_left_phone_title">Telefon raqamlari: </p>
                <div className="footer_left_phone_number_div">
                  <a className="footer_phone_number" href="tel:+998995926600">
                    +998 99 592 66 00
                  </a>
                  <a className="footer_phone_number" href="tel:+998995824000">
                    +998 99 582 40 00
                  </a>
                </div>
              </div>
            </div>

            <div className="footer_left_content_two">
              <p className="footer_left_title_one">Manzil:</p>
              <a className="footer_location_text" href="/">
                Toshkent sh. Yunusobot tumani, Osiyo 6.
              </a>
            </div>
          </div>

          <div className="footer_right_content">
            <img
              className="footer_location_images"
              src={LocationImages}
              alt="footer_location"
            />

            <div className="footer_logo_div">
              <img className="footer_logo" src={footerLogo} alt="logo" />
              <div className="footer_icon_group">
                <a className="footer_icons" href="/">
                  <PiTelegramLogoBold />
                </a>
                <a className="footer_icons" href="/">
                  <FaInstagram />
                </a>
                <a className="footer_icons" href="/">
                  <FiFacebook />
                </a>
              </div>
            </div>
            <p className="footer_bottom_text">© 2024 All right reserved</p>
          </div>
        </div>

        <p className="footer_bottom_text_media">© 2024 All right reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
