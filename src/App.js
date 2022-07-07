import "./App.css";
import Header from "./Header";
import Component from "./Hero";
import Speciality from "./Speciality";
import Whyhere from "./Whyhere";
import Menu from "./Menu"
import InstaGallery from "./InstaGallery";
import Adres from "./Adres";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Component />
      <Speciality />
      <Whyhere />
      <Menu />
      <InstaGallery />
      <Adres />
      <Footer />
    </div>
  );
}

export default App;
