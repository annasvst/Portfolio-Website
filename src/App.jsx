import Test from "./Test";
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="About">
        <Parallax type="about" />
      </section>

      <section>
        <About />
      </section>

      {/* <section id="Services">Parallax</section>
      <section>Services</section> */}
      
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      
      <Portfolio/>

      <section id="Contact">
        <Contact/>
      </section>
    </div>
  );
};

export default App;
