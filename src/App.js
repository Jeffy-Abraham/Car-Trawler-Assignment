import "./App.css";
import Home from "./pages/Home/home";
import { Switch, Route } from "react-router-dom";
import CarProfile from "./pages/CarProfile/car-profile";

function App() {
  return (
    <div>
      <div className="navbar">
        <div style={{ paddingLeft: "5px" }}>
          <span>Car Trawler</span>
        </div>
      </div>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cars/:id" component={CarProfile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
