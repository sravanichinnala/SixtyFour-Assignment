import React, { useState } from "react";
import {
  faAnglesLeft,
  faAnglesRight,
  faHouseUser,
  faMagnifyingGlass,
  faDisplay,
  faCircleQuestion,
  faCalendar,
  faBook,
  faCircleDollarToSlot,
  faHeadphones,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div classNama="sidebar-container">
      <button onClick={toggle} className="arrow-button">
        {isOpen ? (
          <FontAwesomeIcon icon={faAnglesRight} />
        ) : (
          <FontAwesomeIcon icon={faAnglesLeft} />
        )}
      </button>
      {isOpen ? (
        <div className="container">
          <div className="user-home-logo-container">
            <FontAwesomeIcon
              className="icons"
              icon={faHouseUser}
              style={{ marginTop: "30px", color: "#09234d", fontSize: "40px" }}
            />
          </div>
          <div className="user-icons-container">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{
                fontSize: "20px",
                marginTop: "40px",
                marginBottom: "20px",
              }}
            />
            <FontAwesomeIcon
              icon={faDisplay}
              style={{ fontSize: "20px", marginBottom: "20px" }}
            />
            <FontAwesomeIcon
              icon={faCircleQuestion}
              style={{ fontSize: "20px", marginBottom: "20px" }}
            />
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ fontSize: "20px", marginBottom: "20px" }}
            />
            <FontAwesomeIcon
              icon={faBook}
              style={{ fontSize: "20px", marginBottom: "20px" }}
            />
            <FontAwesomeIcon
              icon={faCircleDollarToSlot}
              style={{ fontSize: "20px", marginBottom: "20px" }}
            />
            <FontAwesomeIcon
              icon={faHeadphones}
              style={{ fontSize: "20px", marginBottom: "20px" }}
            />
            <FontAwesomeIcon
              icon={faGear}
              style={{
                fontSize: "20px",
                marginTop: "480",
                marginBottom: "20px",
              }}
            />
          </div>
        </div>
      ) : (
        <div className="sidebar-container-1"></div>
      )}
    </div>
  );
}

export default Sidebar;
