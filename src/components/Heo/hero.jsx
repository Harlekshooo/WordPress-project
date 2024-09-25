import React, { useState } from "react";
import "./hero.css";
import ReactPlayer from "react-player";

const hero = () => {

    const [video, setVideo] = useState('https://youtu.be/vEcz7DrjYvY?list=PL1pJFUVKQ7EQixhsOkTHpy9-VIF3hxqsx')

  return (
    <div className="heroContainer">
      <div className="heroInnerContainer">
        <div className="heroDetailsContainer">
          <h1 className="heroDetailsHeader">meet wordPress</h1>
          <p className="heroDetailsParagraph">
            The open source publishing platform of choice for millions of
            websites worldwide -- from creators and small businesses to
            enterprises.
          </p>
        </div>

        <div className="heroVideoContainer">
          <div className="innerHeroVideoContainer">
            <div className="reactPlayerContainer">
              <ReactPlayer
                url={video}
                height="100%"
                width="100%"
              />
            </div>

            <p className="heroVideoDetail">
              Watch the <a className="heroVideoLink" href={video}>live stream of WordCamp US 2024</a> to stay
              on top of all the keynotes and presentations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
