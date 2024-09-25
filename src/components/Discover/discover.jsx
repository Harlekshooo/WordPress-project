import React from "react";
import "./discover.css";
import discoverImg from "../../assets/discover-image.webp";

const discover = () => {
  return (
    <div className="discoverContainer">
      <div className="discoverInnerContainer">
        <div className="discoverDetailsContainer">
          <h3 className="discoverDetailsHeader">See what's new</h3>
          <p className="discoverDetailsParagraph">
            Bring the style and finesse to your site - building experience with
            WordPress 6.6. This release includes more design options for Block
            themes, a new layout for quick page previews in the Site Editor, and
            rollbacks for plugin auto-updates
          </p>
          <button className="discoverDetailsButton">discover wordPress 6.6</button>
        </div>

        <div className="discoverImgContainer">
            <img className="discoverImg" src={discoverImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default discover;
