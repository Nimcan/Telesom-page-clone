import './App.css';
import CRS from './components/CRS';
import Footer from './components/footer';
import Header from './components/Header';
// import News from './components/News';
import Services from './components/Services';
import Slider from './components/Slider';

function App() {
  return (
    <>
    <Header/>
    <Slider/>
    <CRS/>
    <Services/>
    {/* <News/> */}
    <Footer/>
    </>
  )
}

export default App;
