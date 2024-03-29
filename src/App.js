import "./App.css";
import Welcomer from "./components/Welcomer/Welcomer";
import ChooseYourFriend from "./components/ChooseYourFriend/ChooseYourFriend";
import WhyWe from "./components/WhyWe/WhyWe";
import WeLovePlay from "./components/WeLovePlay/WhyLovePlay";
import AboutUs from "./components/About Us/AboutUs";

function App() {
  return (
    <div className="App">
      <div className="test">
        <Welcomer />
      </div>
      <WhyWe />
      <div className="test2">
        <ChooseYourFriend />
      </div>
      <div className="test3">
        <WeLovePlay />
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
