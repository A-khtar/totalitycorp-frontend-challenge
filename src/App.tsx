import Category from "./components/Category";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Featureclothes from "./components/featureclothes";
import Featurediaper from "./components/feauturediaper";
import MYRoutes from "./components/Routes";
import { BrowserRouter as Router } from 'react-router-dom';
import NewsLetter from "./components/NewsLetter";
import FeautureSection from "./components/FeautureSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <main>
        {/* <Navbar /> */}
        <MYRoutes/>
        <Hero />
        <Category />
        <Featureclothes />
        <Featurediaper/>
        <FeautureSection/>
        <NewsLetter/>
        <Footer/>
        
      </main>
    </Router>
  );
};

export default App;
