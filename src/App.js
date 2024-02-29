import Clients from "./Components/Clients-reviews/Clients";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Introduction from "./Components/Introduction/Introduction";
import Works from "./Components/My_works/Works";
import Navbar from "./Components/Navbar/Navbar";
import Skill from "./Components/Skill/Skill";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <Skill/>
      <Works/>
      <Clients/>
      <Contact/>
      
      <Footer/>
    </div>
  );
}

export default App;
