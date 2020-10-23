import React from "react";
import { Link } from "react-router-dom";
import {
  faCalendarCheck,
  faCogs,
  faFilePrescription,
  faSignOutAlt,
  faTable,
  faUserFriends,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className="d-flex flex-column justify-content-between">
      <div>
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5 className="text-white mb-4 mb-md-5 ">
            <FontAwesomeIcon icon={faTable} /> Dashboard
          </h5>{" "}
        </Link>
        <Link
          to="/allAppointments"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5 className="text-white mb-4 mb-md-5 ">
            <FontAwesomeIcon icon={faCalendarCheck} /> Appointments
          </h5>
        </Link>
        <Link to="/patients" style={{ textDecoration: "none", color: "black" }}>
          <h5 className="text-white mb-4 mb-md-5 ">
            <FontAwesomeIcon icon={faUserFriends} /> Patients
          </h5>
        </Link>

        <Link
          to="/user/prascription"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5 className="text-white mb-4 mb-md-5 ">
            <FontAwesomeIcon icon={faFilePrescription} /> Prascriptions
          </h5>
        </Link>

        <Link
          to="/addDoctor"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5 className="text-white mb-4 mb-md-5 ">
            <FontAwesomeIcon icon={faUserPlus} /> Add Doctor
          </h5>
        </Link>

        <Link
          to="/user/settings"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5 className="text-white mb-4 mb-md-5 ">
            <FontAwesomeIcon icon={faCogs} /> Seetings
          </h5>
        </Link>
      </div>
      <div>
        <h5 className="text-white mb-4 mb-md-5 ">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </h5>
      </div>
    </div>
  );
};

export default SideBar;
