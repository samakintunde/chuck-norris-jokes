import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./tailwind.output.css";
import { Home, Search } from "./routes";
import Footer from "./components/common/footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white bg-brand-900">
        <div className="container p-4 mx-auto lg:max-w-screen-sm flex-auto">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
        <div className="container p-4 mx-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
