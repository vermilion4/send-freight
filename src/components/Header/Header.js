import react from "react";
import "./Header.css";
import logo from "../../assets/images/logo.jpg";

export default function Header () {
  return (
    <header>
      <nav>
          <div className="nav-brand">
                <img src={logo} alt="logo" width="65px" height="60px" /><span id="freight">Freight</span>
          </div>
          <div className="navbar">
              <div id="search">
                  <input type='text' placeholder="Search" className="header-search"/>
              </div>
              <div id="nav-buttons">
                 <div><button className="transparent-btn">Request Quote </button></div>
                 <div><button className="green-btn">Book Shipment</button></div>
              </div>
          </div>

      </nav>
    </header>
  );
};
