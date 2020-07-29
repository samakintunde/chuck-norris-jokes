import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./tailwind.output.css";
import { Home, Search } from "./routes";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white bg-brand-900">
        <div className="flex-auto">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
        <footer className="p-4 text-center">
          Built by{" "}
          <a
            className="hover:text-brand-300"
            href="https://github.com/samakintunde37"
          >
            Samakintunde
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
