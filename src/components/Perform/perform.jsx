import React from "react";
import "./perform.css";
import performImg1 from "../../assets/perform-image1.webp";
import performImg2 from "../../assets/perform-image2.webp";
import performImg3 from "../../assets/perform-image3.webp";

const perform = () => {
  return (
    <div className="actionsContainer">
      <div className="actionsInnerContainer">
        <div className="actionCardsContainer">
          <div className="designAction">
            <div className="actionImgContainer">
              <img className="actionImg" src={performImg1} alt="" />
            </div>
            <div className="actionDetailsContainer">
              <h5 className="actionDetailsHeader">design</h5>
              <p className="actionDetailsParagraph">
                Create any website with flexible design tools and power of{" "}
                <a href="#">blocks.</a> Start with a black canvas or choose a{" "}
                <a href="#">theme.</a> Customize every detail--no code needed.
              </p>
            </div>
          </div>

          <div className="buildAction">
            <div className="actionImgContainer">
              <img className="actionImg" src={performImg2} alt="" />
            </div>
            <div className="actionDetailsContainer">
              <h5 className="actionDetailsHeader">build</h5>
              <p className="actionDetailsParagraph">
                See how your site will look in real time even as you add, edit
                and rearrange content with intuitive editing and integrated
                features to manage it all.
              </p>

              <a className="buildActionLink" href="#">
                Try the Block Editor
              </a>
            </div>
          </div>

          <div className="extendAction">
            <div className="actionImgContainer">
              <img className="actionImg" src={performImg3} alt="" />
            </div>
            <div className="actionDetailsContainer">
              <h5 className="actionDetailsHeader">extend</h5>
              <p className="actionDetailsParagraph">
                Make your site do whatever you need it to. Add a store
                analytics, newsletter, social media integration; you're in
                control with an extensive library of <a href="#">plugins</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default perform;
