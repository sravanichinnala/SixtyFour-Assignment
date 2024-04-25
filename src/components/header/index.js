import { Component } from "react";
import Sidebar from "../sidebar";
import CardsList from "../carditem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faBell,
  faReceipt,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header-sidebar-container">
        <Sidebar />
        <div className="header-bg-container">
          <div className="header-heading-main-container">
            <div className="header-heading-container">
              <h1 className="header-heading">Good Morning, Sravani</h1>
              <p className="header-description">
                You are subscribed for Retail plan
              </p>
            </div>
            <div className="date-container">
              <div className="date-time">
                <FontAwesomeIcon icon={faCalendar} />
                <p className="date-description">Today, 24 April </p>
                <FontAwesomeIcon icon={faClock} />
                <p className="date-description">18:30</p>
              </div>
              <div className="notify-icon-container">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
          </div>
          <div className="library-card-container">
            <div className="card-container">
              <FontAwesomeIcon
                icon={faReceipt}
                style={{ color: "#5de1f0", fontSize: "20px" }}
              />
              <h2 className="library-heading">My Saved Library 1</h2>
              <p className="library-para">dd-mm-yyyy</p>
            </div>
            <div className="card-container">
              <FontAwesomeIcon
                icon={faReceipt}
                style={{ color: "#5258f2", fontSize: "20px" }}
              />
              <h2 className="library-heading">My Saved Library 1</h2>
              <p className="library-para">dd-mm-yyyy</p>
            </div>
            <div className="card-container">
              <FontAwesomeIcon
                icon={faReceipt}
                style={{ color: "#f72036", fontSize: "20px" }}
              />
              <h2 className="library-heading">My Saved Library 1</h2>
              <p className="library-para">dd-mm-yyyy</p>
            </div>
            <div className="card-container">
              <FontAwesomeIcon
                icon={faReceipt}
                style={{ color: "#f26e2c", fontSize: "20px" }}
              />
              <h2 className="library-heading">My Saved Library 1</h2>
              <p className="library-para">dd-mm-yyyy</p>
            </div>
            <div className="card-container">
              <FontAwesomeIcon
                icon={faReceipt}
                style={{ color: "#27cc48", fontSize: "20px" }}
              />
              <h2 className="library-heading">My Saved Library 1</h2>
              <p className="library-para">dd-mm-yyyy</p>
            </div>
          </div>
          <div className="cards-releses-container">
            <CardsList />
            <div className="recent-relecses-container">
              <div className="recent-heading-container">
                <h2 className="recent-heading">Recent</h2>
                <select className="select-element">
                  <option value="India" selected>
                    India
                  </option>
                  <option value="America">America</option>
                  <option value="Australia">Australia</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="China">China</option>
                  <option value="Nepal">Nepal</option>
                  <option value="SriLanka">Sri Lanka</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Pakistan">Pakistan</option>
                </select>
              </div>
              <hr style={{ width: "90%", color: "grey" }} />
              <div className="verticle-description-container">
                <div className="description-container">
                  <div>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ fontSize: "10px", color: "grey" }}
                    />
                    <div className="vr-container"></div>
                  </div>
                  <div
                    className="content-container"
                    style={{ padding: "10px" }}
                  >
                    <p className="date">April 22, 2024</p>
                    <h4 className="heading">Industrial Production</h4>
                    <p className="paragraph">
                      Index of Industrial Production (P) grow by 3.8% YoY in
                      December, as compared to a 6.1% YoY growth in the same
                      month last year. Electricity has seen the slowest growth
                      of 1.2% YoY in December as compared to 10.45 YoY growth in
                      the same month last year
                    </p>
                  </div>
                </div>
                <div className="description-container">
                  <div>
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ fontSize: "10px", color: "grey" }}
                    />
                    <div className="vr-container"></div>
                  </div>
                  <div
                    className="content-container"
                    style={{ padding: "10px" }}
                  >
                    <p className="date">April 22, 2024</p>
                    <h4 className="heading">CPI Inflation</h4>
                    <p className="paragraph">
                      India's Inflation eased to 75 in Jono 60 brasis points
                      dacnese from the previous month Consumer food Price Index
                      (CFRO) declined from 96% in Dec 23 to 8.3% in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
