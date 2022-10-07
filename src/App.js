import './App.css';
import Brunch from './components/Brunch';
import FoodMenu from './components/FoodMenu';
import Footer from './components/Footer';
import Home from './components/Home';
import License from './components/License';
import SubHeader from './components/SubHeader';

function App() {
  return (
    <>
      <Home />
      <SubHeader />
      <FoodMenu />
      <License />
      <Brunch />
      <Footer />
    </>
  );
}

export default App;
