import React, {useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./PublicationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function PublicationCard({work}) {

  const {isDark} = useContext(StyleContext);

  if (!work.logo)
    console.error(`Image of ${work.title} is missing in publication section`);
  return (
    <div className="publication-card-whole">
      <Fade left doi={1000}>
        <div className="publication-card">
          <div className="publication-card-right">
            <div className="publication-text-details">
              <a href={work.url} className="publication-type">
                <span className="icon-text-container">
                  <i className="fa fa-file fa-lg"></i>
                  <span>{work.type}</span>
                </span>
              </a>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } publication-text-doi`}>
                {work.authors} <b><i>{work.title}</i></b> {work.location}
                <a href={work.url} className="work-link"> 
                  {work.doi}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left doi={2000}>
        <div className="publication-card-border"></div>
      </Slide>
    </div>
  );
}
