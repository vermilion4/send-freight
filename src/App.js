import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import plane from "./assets/images/noun_Airplane_75.svg";
import ship from "./assets/images/noun_Ship_1462738.svg";
import truck from "./assets/images/noun_Truck_220116.svg";
import cop from "./assets/images/noun_Police_4190634.svg";

const Service = ({ alt, text, style, src, color }) => {
  return (
    <div className={color}>
      <h4>{text}</h4>
      <img src={src} alt={alt} className={style} />
    </div>
  );
};

const AdditionalService = ({headtext, content}) => {
  return (
    <div className="flex-service">
    <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <span className="add-service-text">
      <h4>{headtext}</h4>
      <h5 className="merge">{content}</h5>
      </span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container transparent">
      <div className="heading"><div id="arrow"><i class="fas fa-arrow-left"></i></div><h2>New Booking</h2></div>
        <p id="subtext">Fill in the information below to get a quote or new booking</p>
      </div>
      <div className="container">
        <h3>Select a service</h3>
        <div className="services">
          <Service
            alt="plane icon"
            text="Air Freight"
            style="service-icon-plane"
            src={plane}
            color = "service blue"
          />
          <Service
            alt="ship icon"
            text="Sea Freight"
            style="service-icon-ship"
            src={ship}
            color = "service"
          />
          <div className="service">
            <h4>
              Inland truck <br />
              (Truck & Barge)
            </h4>
            <img src={truck} alt="truck icon" className="service-icon-truck" />
          </div>
          <Service
            alt="cop icon"
            text="Customs Clearance"
            style="service-icon-police"
            src={cop}
            color = "service"
          />
        </div>
      </div>

      <div className="container">
        <div className="imports">
          <i class="fas fa-info-circle"></i>
          <div id="import-section">
            <div id="selection">
              <button className="import-btn">Import</button>
              <button className="export-btn">Export</button>
            </div>
            <div id="source" className="import-from">
              <i class="fas fa-map-marker-alt"></i>From
              <input type="text" className="from" placeholder="City or Port" />
            </div>
            <div id="destination" className="import-from">
              <i class="fas fa-map-marker-alt"></i>To
              <input type="text" className="from" placeholder="City or Port" />
            </div>
          </div>
          <div id="date-section">
            <div className="import-from">
              <i class="fas fa-calendar-week"></i>
              <input
                type="text"
                className="from row-2"
                placeholder="Ready Date"
              />
            </div>
            <div className="import-from">
              <select>
                <option>Incoterms</option>
              </select>
            </div>
            <div className="import-from">
              <input
                type="text"
                placeholder="Total Cargo Value"
                className="from"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cargo-details">
          <div>
            <h3>Cargo Details</h3>
            <div className="cargo-buttons">
              <button id="dimension-btn">Total Dimensions</button>
              <button id="package-btn">Package Details</button>
            </div>
            <div className="size">
              <div className="relative">
                <div className="volume">
                  <h6 className="size-text">Total Volume</h6>
                  <input type="text" className="size-search" />
                  <span>
                    <h6 className="unit">cbm</h6>
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="weight">
                  <h6 className="size-text">Total Weight</h6>
                  <input type="text" className="size-search" />
                  <span className="unit">
                    <h6>Kg</h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="dangerous">
            <div className="switch-slider">
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
            </div>
            <div>
              <h4>Dangerous Cargo (ex. Chemicals, Battery)</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3>Additional Services</h3>
        <div className="additional-services">
        <AdditionalService headtext="Export Forwarding" content="We handle customs clearance and documentation"/>
        <AdditionalService headtext="Import Customs Clearance" content="We handle import customs and regulatory requirements"/>
        <AdditionalService headtext="Cargo Insurance" content="Protect your cargo from logistics risks up to its full value"/>
        <AdditionalService headtext="Transport / Delivery" content="We deliver the cargo to your door step from the ports"/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
