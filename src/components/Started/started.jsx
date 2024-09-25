import React from "react";
import "./started.css";
import { PiCaretRightThin } from "react-icons/pi";
import rightArrow from "../../assets/right-arrow.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

const started = () => {
  return (
    <div className="startedContainer">
      <div className="startedInnerContainer">
        <section className="startedHeaderSection">
          <h1 className="startedHeader">Get started</h1>
          <div className="startedIconContainer">
            <div className="arrowBody">
              <hr className="longArrowBody" />
            </div>
            <div className="arrowHead">
              <PiCaretRightThin className="arrowHeadIcon" />
            </div>
          </div>
        </section>

        <section className="startedParagraphSection">
          <p className="startedParagraph">
            Find everything you need to get started, download the platform, find
            hosting, and more--whether it is your first site or your
            ninety-first site.
          </p>
        </section>
      </div>
    </div>
  );
};

export default started;
