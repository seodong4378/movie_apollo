import React from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import Home from "../routes/Home"
import Details from "../routes/Detail"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/:id" component={Details}></Route>
    </Router>
  );
}

export default App;
