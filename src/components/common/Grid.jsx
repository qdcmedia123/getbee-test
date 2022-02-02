import React from "react";
import PropTypes from "prop-types";
import callIcon from "assets/svg/call.svg";

const Grid = ({ role, avatar, email, fullName, setShowModel, callIcon }) => {
  return (
    <div className="grid__item item1">
      <div className="head">
        <div className="row mt-24 call-action">
          <div
            className={`badge ${
              role.toLowerCase() === "admin"
                ? "badge--primary"
                : "badge--secoundary"
            } mt-23 `}
          >
            {role}
          </div>
          <div className="call">
            <img src={callIcon} alt="" />
          </div>
        </div>
        <div className="row avatar mt-28">
          <img src={avatar} alt="" />
        </div>
        <div className="row contact mt-32">
          <div className="full-name">{fullName}</div>
          <div className="email">{email}</div>
        </div>
        <div className="row actions mt-41">
          <button
            className="btn btn--secoundary flex-1"
            onClick={() => setShowModel(true)}
          >
            Edit user profile
          </button>
          <button className="btn btn--primary flex-1"> Sales Data</button>
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  setShowModel: PropTypes.func.isRequired,
};

export default Grid;
