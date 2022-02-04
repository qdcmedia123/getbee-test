import React, { useRef, useState } from "react";
import companyDetailsIcon from "assets/svg/company-details-icon.svg";
import getBeeLogo from "assets/svg/getbee-logo.svg";
import HumBurgeIcon from "assets/svg/humburg.svg";
import MaleAvatarSmall from "assets/svg/male-avatar-small.svg";
import mySalesDataIcon from "assets/svg/my-sales-data-icon.svg";
import personalizeIcon from "assets/svg/personalize-icon.svg";
import subscriptionIcon from "assets/svg/subscription-icon.svg";
import teamSalesIcon from "assets/svg/team-sales-icon.svg";
import useOnClickOutside from "hooks/useOnClickOutside";
import HomeIcon from "assets/svg/home-icon.svg";
import IntegrationsIcon from "assets/svg/integrations-icon.svg";
import TeamMembersIcon from "assets/svg/team-members.svg"

const NavBar = () => {
  const [selectedLi, setSelectedLi] = useState(null);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [checked, setChecked] = useState(true);
  const ref = useRef();

  useOnClickOutside(ref, () => setDisplayMenu(false));
  const anchorOnClick = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <>
      <div className="humburg-menu">
        <img src={HumBurgeIcon} alt="" onClick={() => setDisplayMenu(true)} />
      </div>
      <aside
        ref={ref}
        className={`dashboard-sidebar ${
          displayMenu ? "show-sidebar" : "hide-sidebar"
        }`}
      >
        <div className="logo">
          <img src={getBeeLogo} alt="GetBee" />
        </div>

        <div className="admin">
          <div className="nav">
            <div className="nav-group">
              <div className="title">ADMIN</div>
              <ul className="nav-ul">
                <li
                  className={`items ${
                    selectedLi === "homepage-li" ? "selected-nav" : ""
                  }`}
                  onClick={() => setSelectedLi("homepage-li")}
                  id="homepage-li"
                >
                  <div className="item">
                    <img src={HomeIcon} alt="" className="icon" />
                  </div>
                  <div className="item">
                    <a href="!#" onClick={anchorOnClick}>
                      Homepage
                    </a>
                  </div>
                </li>

                <li
                  className={`items ${
                    selectedLi === "team-sales-data-li" ? "selected-nav" : ""
                  }`}
                  onClick={() => setSelectedLi("team-sales-data-li")}
                  id="team-sales-data-li"
                >
                  <div className="item">
                    <img src={teamSalesIcon} alt="" className="icon" />
                  </div>
                  <div className="item">
                    <a href="!#" onClick={anchorOnClick}>
                      Team sales data
                    </a>
                  </div>
                </li>

                <li
                  className={`items ${
                    selectedLi === "company-details-li" ? "selected-nav" : ""
                  }`}
                  onClick={() => setSelectedLi("company-details-li")}
                  id="company-details-li"
                >
                  <div className="item">
                    <img src={companyDetailsIcon} alt="" className="icon" />
                  </div>
                  <div className="item">
                    <a href="!#" onClick={anchorOnClick}>
                      Company Details
                    </a>
                  </div>
                </li>

                <li
                  className={`items ${
                    selectedLi === "team-members-li" ? "selected-nav" : ""
                  }`}
                  onClick={() => setSelectedLi("team-members-li")}
                  id="team-members-li"
                >
                  <div className="item">
                    <img src={TeamMembersIcon} alt="" className="icon" />
                  </div>
                  <div className="item">
                    <a href="!#" onClick={anchorOnClick}>
                      Team members
                    </a>
                  </div>
                </li>

                <li
                  className={`items ${
                    selectedLi === "subscription-li" ? "selected-nav" : ""
                  }`}
                  onClick={() => setSelectedLi("subscription-li")}
                  id="subscription-li"
                >
                  <div className="item">
                    <img src={subscriptionIcon} alt="" className="icon" />
                  </div>
                  <div className="item">
                    <a href="!#" onClick={anchorOnClick}>
                      Subscription
                    </a>
                  </div>
                </li>

                <li
                  className={`items ${
                    selectedLi === "personalize-li" ? "selected-nav" : ""
                  }`}
                  onClick={() => setSelectedLi("personalize-li")}
                  id="personalize-li"
                >
                  <div className="item">
                    <img src={personalizeIcon} alt="" className="icon" />
                  </div>
                  <div className="item">
                    <a href="!#" onClick={anchorOnClick}>
                      Personalize
                    </a>
                  </div>
                </li>
                <li
                  className={`items ${
                    selectedLi === "integrations-li" ? "selected-nav" : ""
                  }`}
                  onClick={() => setSelectedLi("integrations-li")}
                  id="integrations-li"
                >
                  <div className="item">
                    <img src={IntegrationsIcon} alt="" className="icon" />
                  </div>
                  <div className="item">
                    <a href="!#" onClick={anchorOnClick}>
                      Integrations
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="nav-group">
              <div className="title">EXPERT</div>
              <ul className="nav-ul">
                <li
                  className={`items ${
                    selectedLi === "my-sales-data" ? "selected-nav" : ""
                  }`}
                  onClick={() => setSelectedLi("my-sales-data")}
                  id="my-sales-data"
                >
                  <div className="item">
                    <img src={mySalesDataIcon} alt="" className="icon" />
                  </div>
                  <div className="item">
                    <a href="!#" onClick={anchorOnClick}>
                      My sales data
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="status mt-2">
              <div className="row status--row">
                <div className="avaibilities">
                  <div className="title-a">Availability</div>
                  <div className="check">Check camera & audio</div>
                </div>
                <div className="switch-status">
                  <label class="switch">
                    <input
                      type="checkbox"
                      onChange={() => setChecked((prevState) => !prevState)}
                      checked={checked}
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="row user">
                <div className="avatar">
                  <img src={MaleAvatarSmall} alt="" />
                </div>
                <div className="name-role">
                  <div className="name">Martial Dahal</div>
                  <div className="role">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavBar;
