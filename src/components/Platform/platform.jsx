import React from "react";
import "./platform.css";
import platformLogo1 from "../../assets/platform-logo1.webp"
import platformLogo2 from "../../assets/platform-logo2.png"
import platformLogo3 from "../../assets/platform-logo3.png"
import platformLogo4 from "../../assets/platform-logo4.webp"
import platformLogo5 from "../../assets/platform-logo5.png"
import platformLogo6 from "../../assets/platform-logo6.webp"
import platformImgRow1 from "../../assets/platform-first-imageRow.webp"
import platformImgRow2 from "../../assets/platform-second-imageRow.webp"
import platformImgRow3 from "../../assets/platform-third-imageRow.webp"

const platform = () => {
  return (
    <div className="platformContainer">
      <div className="platformInnerContainer">
        <div className="platformDetailsContainer">
          <h4 className="platformDetailsHeader">
            One platform, a universe of possibilities
          </h4>
          <p className="platformDetailsParagraph">
            Discover a collection of website examples all around the world,
            curated to spotlight gorgeous design, technical innovation, and the
            limitless power of WordPress.
          </p>
        </div>

        <div className="platformLogoContainer">
          <div className="platformLogoWrap"><img className="platformLogo" src={platformLogo1} alt="" /></div>
          <div className="platformLogoWrap2"><img className="platformLogo" src={platformLogo2} alt="" /></div>
          <div className="platformLogoWrap3"><img className="platformLogo" src={platformLogo3} alt="" /></div>
          <div className="platformLogoWrap"><img className="platformLogo" src={platformLogo4} alt="" /></div>
          <div className="platformLogoWrap5"><img className="platformLogo" src={platformLogo5} alt="" /></div>
          <div className="platformLogoWrap"><img className="platformLogo" src={platformLogo6} alt="" /></div>
        </div>

        <div className="platformBtnContainer">
          <button className="platformBtn">Explore the Showcase</button>
        </div>

        <div className="platformImgRowContainer">
          <div className="platformImgRowWrap">
            <img className="platformImgRow" src={platformImgRow1} alt="" />
          </div>

          <div className="platformImgRowWrap">
            <img className="platformImgRow" src={platformImgRow2} alt="" />
          </div>

          <div className="platformImgRowWrap">
            <img className="platformImgRow" src={platformImgRow3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default platform;
