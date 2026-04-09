import React from "react";
import "./Publication.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {publicationSection} from "../../portfolio";

export default function Publication() {
  if (publicationSection.display) {
    return (
      <div className="publication-section" id="publications">
        <h1 className="publication-heading">{publicationSection.title}</h1>
        <h3 className="publication-subheading">{publicationSection.subtitle}</h3>
        <div className="publication-card-container">
          {publicationSection.works.map((work, index) => (
            <PublicationCard key={index} work={work} />
            // <Button text="Publication" newTab={true} href={work.duration}/>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
