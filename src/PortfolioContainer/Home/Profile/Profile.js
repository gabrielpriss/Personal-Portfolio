import React from "react";
import Typical from "react-typical";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="'profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/gabriel-priss/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/gabrielpriss" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-name">
            <span className="primary-text">
              Hello I'm {" "}
              <span className="name">
                Gabriel
              </span>
            </span>
          </div>
          <div className="profile-role">
            <span className="primary-text">
              {" "}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack", 1000,
                    "React/Node", 1000,
                    "Web", 1000,
                    "Developer", 1000,
                  ]}
                >
                </Typical>
              </h1>
              <span className="profile-role-tag">
                Building front and back-end applications with passion and efficiency.
              </span>
            </span>
            <div className='profile-options'>
              <a href="gabriel.pdf" download='Gabriel Priss.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>

            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  )
}