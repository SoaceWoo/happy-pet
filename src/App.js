import "./App.css";
import Welcomer from "./components/Welcomer/Welcomer";
import ChooseYourFriend from "./components/ChooseYourFriend/ChooseYourFriend";
import WhyWe from "./components/WhyWe/WhyWe";
import WeLovePlay from "./components/WeLovePlay/WhyLovePlay";

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
    </div>
  );
}

export default App;
