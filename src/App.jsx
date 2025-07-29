import React from "react";
import { LOGO_URL } from "./utils/constants";
import { CDN_URL } from "./utils/constants";

import Header from "./components/Header";
import Body from "./components/Body";








const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;
