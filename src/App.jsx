import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="/logo.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const StyleCard={
  backgroundColor:"#f0f0f0"
}

const RestaurantCard = () => {
  return (
    <div className="res-card" style={StyleCard}>
      <h3>Meghana Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-card-container">
        {/* restaurant cards */}
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;
