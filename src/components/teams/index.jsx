import searchIcon from "assets/svg/search.svg";
import Grid from "components/common/Grid";
import NothingFound from "components/common/NothingFound";
import EditUser from "components/teams/index.edit";
import { teamMockData as teams } from "mock/teams";
import { useEffect, useState } from "react";


export default function TeamMembers() {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if(showModel) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "scroll"
    }

  }, [showModel]);

  

  const [selectedTab, setSelectedTab] = useState("tab__item-1");
  return (
    <div className="dashboard-main">
      <EditUser showModel={showModel} setShowModel={setShowModel} />

      <div className="row teams-row">
        <div className="col team-member">Team Members</div>
        <div className="form">
          <div className="col search-form">
            <img src={searchIcon} alt="" className="search-icon" />
            <input
              type="text"
              placeholder="Search expoerts..."
              className="search-input"
            />
          </div>
          <div className="col">
            <button className="btn btn--primary">Invite Members</button>
          </div>
        </div>
      </div>
      <div className="tab-container">
        <div className="tab-ul">
          <ul>
            <li
              className={selectedTab === "tab__item-1" ? "selected-li" : ""}
              onClick={() => setSelectedTab("tab__item-1")}
            >
              {" "}
              <span>All members</span> <span>[22]</span>
            </li>
            <li
              className={selectedTab === "tab__item-2" ? "selected-li" : ""}
              onClick={() => setSelectedTab("tab__item-2")}
            >
              {" "}
              <span>Pending Invitations</span> <span>[0]</span>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div
            className={`tab__item ${
              selectedTab === "tab__item-1" ? "show" : "hide"
            }`}
            id="tab__item-1"
          >
            <div className="grid">
              {teams.map((team, i) => (
                <Grid 
                   id={i} 
                   email={team.email} 
                   role={team.role} 
                   fullName={team.fullName}
                   avatar={team.avatar}
                   setShowModel={setShowModel}
                   callIcon={team.callIcon}
                   />
              ))}
            </div>
          </div>
          <div
            className={`tab__item ${
              selectedTab === "tab__item-2" ? "show" : "hide"
            }`}
            id="tab__item-2"
          >
            <NothingFound />
          </div>
        </div>
      </div>
    </div>
  );
}
