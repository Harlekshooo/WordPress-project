import React from "react";
import "./footer.css";
import { GoArrowUpRight } from "react-icons/go";
import { FaWordpress } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerInnerContainer">
        <section className="footerListSection">
          <ul className="footerSection">
            <li className="footerItem">About</li>
            <li className="footerItem">News</li>
            <li className="footerItem">Hosting</li>
            <li className="footerItem">Privacy</li>
          </ul>

          <ul className="footerSection">
            <li className="footerItem">Showcase</li>
            <li className="footerItem">Themes</li>
            <li className="footerItem">Plugins</li>
            <li className="footerItem">Patterns</li>
          </ul>

          <ul className="footerSection">
            <li className="footerItem">Learn</li>
            <li className="footerItem">Documentation</li>
            <li className="footerItem">Developers</li>
            <li className="footerItem">
              WordPress.tv <GoArrowUpRight />
            </li>
          </ul>

          <ul className="footerSection">
            <li className="footerItem">Get Involved</li>
            <li className="footerItem">Events</li>
            <li className="footerItem">
              Donate <GoArrowUpRight />
            </li>
            <li className="footerItem">Five for the Future</li>
          </ul>

          <ul className="footerSection">
            <li className="footerItem">
              WordPress.com <GoArrowUpRight />
            </li>
            <li className="footerItem">
              Matt <GoArrowUpRight />
            </li>
            <li className="footerItem">
              bbPress <GoArrowUpRight />
            </li>
            <li className="footerItem">
              BuddyPress <GoArrowUpRight />
            </li>
          </ul>
        </section>

        <div className="footerEnding">
          <section className="footerSocialsContainer">
            <div className="footerSocials">
              <FaWordpress className="footerSocialsIcon" />
              <p className="footerSocialsName">WordPress.org</p>
            </div>

            <div className="otherFooterSocialsContainer">
              <div className="footerSocials">
                <FaFacebook className="footerSocialsIcon" />
              </div>

              <div className="footerSocials">
                <FaXTwitter className="footerSocialsIcon" />
              </div>

              <div className="footerSocials">
                <FaInstagram className="footerSocialsIcon" />
              </div>

              <div className="footerSocials">
                <FaLinkedin className="footerSocialsIcon" />
              </div>

              <div className="footerSocials">
                <FaYoutube className="footerSocialsIcon" />
              </div>
            </div>
          </section>

          <div className="footerNoteContainer">
            <p className="footerNote">code is poetry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
