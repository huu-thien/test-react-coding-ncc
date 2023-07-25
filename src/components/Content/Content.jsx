import About from "../About/About";
import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import './Content.scss';

const Content = () => {
  return (
    <main className="content">
      <Logo />
      <About />
      <CardList />
      <Footer />
    </main>
  );
};

export default Content;
