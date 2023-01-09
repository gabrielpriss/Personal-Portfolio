import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span><b>{props.subHeading ? props.subHeading : ""}</b></span>
        </div>
        <div className="resume-heading-description">
          <span><b>{props.description ? props.description : ""}</b></span>
        </div>
      </div>
    );
  };

  const ResumeHeading2 = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span><b>{props.description ? props.description : ""}</ b></span>
        </div>
        <div className="repository">
          <a rel="noopener noreferrer" href={props.href} target="_blank">
            <span>Repository</span>
          </a>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Principal Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Node JS" },
    { skill: "Express" },
    { skill: "React JS" },
    { skill: "SQL and NoSQL" },
    { skill: "MySQL" },
    { skill: "MongoDB" },
    { skill: "Tests Coverage TDD" },
    { skill: "Mocha and Chai" },
    { skill: "Jest and RTL" },
    { skill: "Python" },
    { skill: "Web Scraping" },
    { skill: "Java" },
    { skill: "P. Objects Oriented" },
    { skill: "Docker" },

  ];

  const projectsDetails = [
    {
      title: "Futebol Club",
      subHeading:
        "A back-end tested CRUD API that manage futebol teams and matches",
      description: "Technologies Used: TypeScript, Express, Sequelize, MySQL and Chai/Sinon for tests",
      href: "https://github.com/gabrielpriss/Futebol-Clube-Project",
    },
    {
      title: "Delivery App",
      subHeading:
        "Front and back-end manageable store project",
      description: "Technologies Used: React, Express, Sequelize and MySQL",
      href: "https://github.com/gabrielpriss/Delivery-App",
    },
    {
      title: "Web Scraping",
      subHeading:
        "Web Scraping tech news from a blog and saving at a Database  ",
      description: "Technologies Used: Python and MongoDB",
      href: "https://github.com/gabrielpriss/Web-Scraping",
    },
  ];

  const resumeDetails = [

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Full Stack Junior Web Developer "}
          subHeading={"Signo Web - Curitiba, Brasil"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as a full-time web developer in 2022 at Signo Web.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Development and maintance of web aplications, most of them with React/Node - JavaScript/TypeScript.
          </span>
          <br />
          <span className="resume-description-text">
            - Some of the projects that I put my hands on:
            <br />- <a target="_blank" rel="noopener noreferrer" href="https://www.lotericanova.com/">Lotérica Nova</a>.{" "}
            <br />- <a target="_blank" rel="noopener noreferrer" href="https://www.centroradiologicocg.com.br/">Centro Radiológico</a>.{" "}
          </span>
        </div>
      </div>
    </div>,

    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Trybe"}
        subHeading={"Trybe's 1500 hours full stack web development course adresses software development, front and back-end development, computer science, software engineering and soft skills"}
      />

      <ResumeHeading
        heading={"High School"}
        subHeading={"Sesi Alto da Glória Curitiba"}

      />
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading2
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          href={projectsDetails.href}
        />

      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Gym"
        description="Apart from being a tech enthusiast and a code writer, I also love to practice physical exercise that helps me to relieve stress."
      />
      <ResumeHeading
        heading="Music"
        description="Skimming through old school rap songs is at times the best motivator that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in strategy video-games, having interactive gaming excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio and Personal Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
