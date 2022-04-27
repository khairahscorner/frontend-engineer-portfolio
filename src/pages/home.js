import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  MainWrapper,
  HeaderWrapper,
  FooterWrapper,
  ButtonWrapper,
} from "../components/styles";
import Logo from "../assets/logo.svg";
import { ReactComponent as FooterLogo } from "../assets/logo.svg";
import { ReactComponent as ResumeIcon } from "../assets/cv.svg";

const Home = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <HeaderWrapper>
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div>
          <div className="resume-text">Download my CV</div>
          <div className="resume-icon">
            <ResumeIcon />
          </div>
        </div>
      </HeaderWrapper>

      <MainWrapper>
        <div className="first-section">
          <h1 className="heading">TEUHA!!</h1>
          <p className="sub">트하!!</p>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <h2 className="quote">"안녕하세요, 트레저 입니다"</h2>
          <p className="sub span">"Hello, We Are Treasure"</p>
          <div className="about">
            <p>
              This was created by a
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/khairahscorner"
              >
                {" "}
                Treasure Maker
              </a>
              .
            </p>
            <p>
              It shares details about the boy group,{" "}
              <span className="span">Treasure</span>, its members and a way to
              stream all their songs and M/Vs.
            </p>
          </div>
        </div>
        <div className="second-section">
          <h2 className="section-heading">~ ABOUT TREASURE ~</h2>
          <div className="bio">
            Treasure (Hangul: 트레저; Japanese: トレジャー; stylized as
            TREASURE) is a South Korean boy band formed in 2019 by YG
            Entertainment through the reality-survival program YG Treasure Box.
            The twelve-piece group equally shares joint leadership among the
            eldest members, Choi Hyun-suk and Jihoon, and officially made their
            debut on August 7, 2020 with their single album, The First Step:
            Chapter One, and its lead single, "Boy".
            <p>
              Source:{" "}
              <a
                className="source"
                href="https://en.wikipedia.org/wiki/Treasure_(band)"
              >
                - Wikipedia
              </a>
            </p>
          </div>
          <ButtonWrapper>
            <NavLink to="/members">Meet The Members</NavLink>
          </ButtonWrapper>
        </div>
      </MainWrapper>

      <FooterWrapper>
        <div className="footer-logo">
          <FooterLogo />
        </div>
        <div className="credit">
          © {currentYear} - Airah Yusuff. All rights reserved.
        </div>
      </FooterWrapper>
    </div>
  );
};

export default Home;
