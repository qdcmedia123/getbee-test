import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "assets/svg/close.svg";
import MaleAvatar from "assets/svg/male-avatars.svg";

const SideModel = ({
  showModel,
  setShowModel,
  setCropImgPopup,
  selectedTab,
  setSelectedTab,
  children,
}) => {
  return (
    <div
      className={`model-container ${
        showModel ? "show-model-container" : "hide-model-container"
      }`}
    >
     {showModel && <div className="abs-btns">
        <button className="btn btn--secoundary">User sales data</button>
        <button className="btn btn--primary">Save user settings</button>
      </div>} 

      <div className="model">
        <div className="row close">
          <div className="close-icon" onClick={() => setShowModel(false)}>
            <img src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="title">Edit user profile</div>
        </div>
        <div className="row">
          <div className="intro">
            <div className="avatar">
              <img src={MaleAvatar} alt="" />
            </div>
            <div className="update delete">
              <div className="buttons">
                <button
                  className="btn btn--light"
                  onClick={() => setCropImgPopup(true)}
                >
                  Update photo
                </button>
                <button className="btn btn--transparent ">Delete</button>
              </div>
              <div className="message">At least 168x168px png or jpg file.</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="tab-container">
            <div className="tab-ul">
              <ul>
                <li
                  className={selectedTab === "tab__item-1" ? "selected-li" : ""}
                  onClick={() => setSelectedTab("tab__item-1")}
                >
                  {" "}
                  <span>Personal Info</span>
                </li>
                <li
                  className={selectedTab === "tab__item-2" ? "selected-li" : ""}
                  onClick={() => setSelectedTab("tab__item-2")}
                >
                  {" "}
                  <span>Additional info</span>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div
                className={`tab__item ${
                  selectedTab === "tab__item-1" ? "show" : "hide"
                } vh1`}
                id="tab__item-1"
              >
                <form className="mt-2">
                  <div className="form-group">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" className="form-input" id="first-name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" className="form-input" id="last-name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      placeholder="frankwilliams@gmail.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select id="role" className="form-input ">
                      <option value="expert">Expert</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <span className="delete-user">Delete User</span>
                  </div>
                </form>

                {/* <div className="form-group actions">
                  <button className="btn btn--secoundary">
                    User sales data
                  </button>
                  <button className="btn btn--primary">
                    Save user settings
                  </button>
                </div> */}
              </div>
              <div
                className={`tab__item ${
                  selectedTab === "tab__item-2" ? "show" : "hide"
                }`}
                id="tab__item-2"
              >
                <form>
                  <div className="form-group">Add information here</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

SideModel.propTypes = {
  showModel: PropTypes.bool.isRequired,
  setShowModel: PropTypes.func.isRequired,
  setCropImgPopup: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export default SideModel;
