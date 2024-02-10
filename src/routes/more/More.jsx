import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Books from "./books/Books";
import Card from "./card/Card";
import Form from "../../components/form/Form";
import MoreHeader from "./more_header/MoreHeader";
const More = () => {
  return (
    <>
      <MoreHeader />
      <Books />
      <Card />
      <Form />
      <Footer />
    </>
  );
};

export default More;
