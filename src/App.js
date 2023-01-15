import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/layout/Index";
import { Provider } from "./context";
import Lyrics from "./components/tracks/Lyrics";

function App() {
  return (
    <Provider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route exact path="/lyrics/track/:id">
                <Lyrics />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
