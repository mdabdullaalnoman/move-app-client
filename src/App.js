import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Component/Home/Home";
import Nomatch from "./Component/NoMatch/Nomatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="*">
          <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
