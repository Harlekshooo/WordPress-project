import React from "react";
import "./sideBar.css";
import { GoArrowUpRight } from "react-icons/go";

const sideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="sideBarInnerContainer">
        <section className="sidebarHeadingContainer">
          <div className="sideBarHeaderWrap">
            <h2 className="sideBarHeader">news</h2>
          </div>

          <div className="sideBarHeaderWrap">
            <h2 className="sideBarHeader">showcase</h2>
          </div>

          <div className="sideBarHeaderWrap">
            <h2 className="sideBarHeader">hosting</h2>
          </div>

          <div className="sideBarHeaderWrap">
            <h2 className="sideBarHeader">extend</h2>
            <ul className="sideBarHeaderListContainer">
                <li className="sideBarHeaderList">Themes</li>
                <li className="sideBarHeaderList">Plugins</li>
                <li className="sideBarHeaderList">Patterns</li>
                <li className="sideBarHeaderList">Blocks</li>
                <li className="sideBarHeaderList">Openverse <GoArrowUpRight /></li>
            </ul>
          </div>

          <div className="sideBarHeaderWrap">
            <h2 className="sideBarHeader">learn</h2>
            <ul className="sideBarHeaderListContainer">
                <li className="sideBarHeaderList">Learn WordPress</li>
                <li className="sideBarHeaderList">Documentation</li>
                <li className="sideBarHeaderList">Forums</li>
                <li className="sideBarHeaderList">Developers</li>
                <li className="sideBarHeaderList">WordPress.tv <GoArrowUpRight /></li>
            </ul>
          </div>

          <div className="sideBarHeaderWrap">
            <h2 className="sideBarHeader">community</h2>
            <ul className="sideBarHeaderListContainer">
                <li className="sideBarHeaderList">Make WordPress</li>
                <li className="sideBarHeaderList">Plugins</li>
                <li className="sideBarHeaderList">Phone Directory</li>
                <li className="sideBarHeaderList">Five for the Future</li>
                <li className="sideBarHeaderList">Events</li>
                <li className="sideBarHeaderList">Job Board <GoArrowUpRight /></li>
            </ul>
          </div>

          <div className="sideBarHeaderWrap">
            <h2 className="sideBarHeader">about</h2>
            <ul className="sideBarHeaderListContainer">
                <li className="sideBarHeaderList">About WordPress</li>
                <li className="sideBarHeaderList">Enterprise</li>
                <li className="sideBarHeaderList">Gutenberg <GoArrowUpRight /></li>
            </ul>
          </div>

          <button className="sideBarGet">get wordPress</button>
        </section>
      </div>
    </div>
  );
};

export default sideBar;
