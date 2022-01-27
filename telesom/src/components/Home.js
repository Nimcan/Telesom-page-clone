import CRS from "./CRS/CRS";
import Footer from "./Footer/footer";
import Header from "./Header/Header";
import Services from "./services/Services";
import Slider from "./Header/Slider";


function Home(){
    return(
        <>
        <Header/>
        <Slider/>
        <CRS/>
        <Services/>
        <Footer/>
        </>
    )
}

export default Home