import React from "react";
import "./community.css";
import communityImg from "../../assets/community-image.webp";

const community = () => {
  return (
    <div className="communityContainer">
      <div className="communityInnerContainer">
        <div className="communityMeetContainer">
          <div className="communityMeetDetails">
            <h4 className="communityMeetHeaderDetails">
              Meet the WordPress community
            </h4>
            <p className="communityMeetParagraphDetails1">
              Behind the technology is a diverse collective of people
              collaborating and gathering from around the world. We hold regular
              events with opportunities to learn more about WordPress and latest
              tech trends, connect with fellow industry experts, and foster your
              professional growth.
            </p>
            <p className="communityMeetParagraphDetails2">
              We're united by the spirit of open source, and the freedom to
              build, transform, and share without barriers. Everyone is welcome.
            </p>
            <a href="#" className="communityDetailsMeetLink">
              Find an event near you
            </a>
          </div>
          <div className="communityMeetImgContainer">
            <img src={communityImg} className="communityMeetImg" alt="" />
          </div>
        </div>
        <div className="communityBuildContainer">
          <h5 className="communityBuildHeader">
            Build for yourself, not by yourself
          </h5>
          <p className="communityBuildParagraph">
            Whether you're an entrepreneur, professional developer, or
            first-time blogger there's a library of resources and learning tools
            ready for you. Plus, you have the whole WordPress community in your
            corner.
          </p>
          <div className="communityBuildLinkContainer">
            <a href="#" className="communityBuildLink">
              Learn how to use WordPress
            </a>
            <a href="#" className="communityBuildLink">
              Test WordPress out in your browser
            </a>
            <a href="#" className="communityBuildLink">
              Search documentation
            </a>
            <a href="#" className="communityBuildLink">
              Dig into the code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default community;
