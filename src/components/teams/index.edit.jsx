import CropPhotoModel from "components/models/CropPhotoModel";
import SideModel from "components/models/SideModel";
import React, { useState } from "react";
import ReactDOM from "react-dom";
const EditUser = ({ showModel, setShowModel }) => {
  const [selectedTab, setSelectedTab] = useState("tab__item-1");
  const [cropImgePopup, setCropImgPopup] = useState(false);
  const [range, setRange] = useState(50);

  const rangeHandler = (e) => {
    setRange(e.target.value);
  };

  const model = (
    <SideModel
      showModel={showModel}
      setShowModel={setShowModel}
      setCropImgPopup={setCropImgPopup}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
    >
      <CropPhotoModel
        cropImgePopup={cropImgePopup}
        setCropImgPopup={setCropImgPopup}
        range={range}
        rangeHandler={rangeHandler}
      />
    </SideModel>
  );

  return ReactDOM.createPortal(model, document.getElementById("model"));
};

export default EditUser;
