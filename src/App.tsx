import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./tailwind.output.css";
import { Home, Search } from "./routes";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import { useTranslation } from "react-i18next";

function App() {
  const [rtl, setRtl] = useState(false);
  const { i18n, ready } = useTranslation();

  i18n.on("languageChanged", (lang) => {
    if (lang === "ar") {
      setRtl(true);
    } else {
      setRtl(false);
    }
  });

  // Empty render to prevent flash of text just before i18n grabs
  // the user locale from local storage
  if (!ready) return null;

  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white bg-brand-900">
        <div className="container p-4 mx-auto lg:max-w-screen-sm">
          <Header />
        </div>
        <div
          className="container p-4 mx-auto lg:max-w-screen-sm flex-auto h-full items-center"
          dir={rtl ? "rtl" : "ltr"}
        >
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
