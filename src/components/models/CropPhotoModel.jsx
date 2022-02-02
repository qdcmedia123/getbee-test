import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "assets/svg/close.svg";
import CropSampleImg from "assets/img/crop-sample.png";

const CropPhotoModel = ({
  cropImgePopup,
  setCropImgPopup,
  range,
  rangeHandler,
  children,
}) => {
  return (
    <div
      className={`crop-container ${cropImgePopup ? "crop-show" : "crop-hide"}`}
    >
      <div
        className={`crop-photo ${cropImgePopup ? "crop-show" : "crop-hide"}`}
      >
        <div className="close">
          <div className="close-icon" onClick={() => setCropImgPopup(false)}>
            <img src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="group1">
          <div className="row">
            <div className="title">Crop photo</div>
          </div>
          <div className="row">
            <div className="crop-area">
              <div className="img-slider">
                <div className="img">
                  <img src={CropSampleImg} alt="" />
                </div>
                <div className="slider">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={range}
                    class="slider"
                    id="myRange"
                    onChange={rangeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row actions">
          <div className="form-group actions">
            <button className="btn btn--secoundary">Cancel</button>
            <button className="btn btn--primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CropPhotoModel.propTypes = {
  cropImgePopup: PropTypes.string.isRequired,
  setCropImgPopup: PropTypes.func.isRequired,
  range: PropTypes.number.isRequired,
  rangeHandler: PropTypes.func.isRequired,
};

export default CropPhotoModel;
