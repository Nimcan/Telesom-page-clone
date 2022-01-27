import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Support from './components/supportForm/supportForm';
// import Header from './components/Header'
// import Footer from './components/footer'


function App() {
  return (
    <div>
    <Routes>
      {/* <Header/> */}
      <Route exact path = "/" element = {<Home/>} />
      <Route exact path = "/support" element = {<Support/>}/>
      {/* <Footer/> */}
    </Routes>
    </div>
  )
}

export default App;
