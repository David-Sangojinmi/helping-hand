import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, SignUp, Login, ChooseType, FinishAccountHelper, FinishAccountHelpee, Helper, Helpee } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/signup" exact component={() => <SignUp />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/choose-type" exact component={() => <ChooseType />} />
          <Route path="/finish-account-helper" exact component={() => <FinishAccountHelper />} />
          <Route path="/finish-account-helpee" exact component={() => <FinishAccountHelpee />} />
          <Route path="/helper" exact component={() => <Helper />} />
          <Route path="/helpee" exact component={() => <Helpee />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
