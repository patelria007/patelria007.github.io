import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.softwareSkillsByCategory.map((categoryGroup, index) => (
          <div key={index} className="software-skill-category">
            <h3 className="software-skill-category-title">{categoryGroup.category}</h3>
            <ul className="dev-icons">
              {categoryGroup.skills.map((skills, i) => (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
