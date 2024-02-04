import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "./main/Main";
import About from "./about/About";
import Book from "./book/Book";
import Customers from "./customer/Customers";
import Form from "../../components/form/Form";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Book />
      <Customers />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
