import NavBar from "../components/Element/NavBar/NavBar";
import Hero from "../components/Layout/Hero";
import About from "../components/Layout/About";
import Portfolio from "../components/Layout/Portfolio";
import QuotesGenerator from "../components/Layout/QuotesGenerator";
import AnonMessage from "../components/Layout/AnonMessage";
import Contact from "../components/Layout/Contact";
import Footer from "../components/Element/Footer/Footer";
import DarkModeToogle from "../components/Element/ToogleDarkMode/DarkModeToogle";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>

      <DarkModeToogle></DarkModeToogle>

      <Hero></Hero>

      <About></About>

      <Portfolio></Portfolio>

      <QuotesGenerator></QuotesGenerator>

      <AnonMessage></AnonMessage>

      <Contact></Contact>

      <Footer></Footer>
    </>
  );
};

export default Home;
