import "./App.css";
import Welcomer from "./components/Welcomer/Welcomer";
import ChooseYourFriend from "./components/ChooseYourFriend/ChooseYourFriend";
import WhyWe from "./components/WhyWe/WhyWe";

function App() {
  return (
    <div className="App">
      <div className="test">
        <Welcomer />
      </div>
      <div className="test1">
        <WhyWe />
      </div>
      <div className="test2">
        <ChooseYourFriend />
      </div>
    </div>
  );
}

export default App;
