import "./Form.css";
import { CiUser } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
const Form = () => {
  const sendTeligram = async (e) => {
    e.preventDefault();
    let { ism, tel } = e.target;
    let chat_id = 792010044;
    let message = "Ismi: " + ism.value + "\nTel: +998" + tel.value;
    console.log(message);
    await fetch(
      "https://api.telegram.org/bot6717549964:AAHm1LcGwDSqTfZvMkWjwsKEMKYwj5P_sh0/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: message,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Buyurtmangiz qabul qilindi tez orada siz bilan bog'lanamiz!");
          ism.value = "";
          tel.value = "";
          console.log(data);
        } else {
          alert("Serverda xatolik!");
        }
      });
  };
  return (
    <div className="container">
      <form onSubmit={(e) => sendTeligram(e)} id="form">
        <div className="form_div">
          <CiUser className="form_icons" />
          <input
            className="form_input"
            type="text"
            placeholder="Ismingiz"
            name="ism"
            required
            maxLength={15}
            minLength={3}
          />
        </div>
        <div className="form_div">
          <FiPhoneCall className="form_icons" />
          <input
            className="form_input"
            type="text"
            placeholder="Telefon raqamingiz"
            name="tel"
            required
            maxLength={13}
            minLength={9}
          />
        </div>
        <button type="submit" className="form_btn">
          Jo’natish
        </button>
      </form>
    </div>
  );
};

export default Form;
