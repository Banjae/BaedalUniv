//  About members page
import React from "react";
import { useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// tailwind-styled-component
import tw from "tailwind-styled-components";

const ProfileUl = tw.ul`
  flex
  justify-around
`;

const Profile = tw.li`
  flex
  flex-col
  items-center
  w-1/6
  bg-slate-300
  shadow-lg
  rounded-lg
`;

const Name = tw.div`
  text-2xl
`;

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>멤버소개 페이지입니다.</div>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div>
        <div>FE Members</div>
        <ProfileUl>
          <Profile>
            <Name>반XX</Name>
            <a href="https://github.com/Banjae" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Profile>
          <Profile>
            <Name>옥XX</Name>
            <a href="https://github.com/dev-jiji" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Profile>
          <Profile>
            <Name>조XX</Name>
            <a href="https://github.com/choj96" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Profile>
        </ProfileUl>
        <div>BE Members</div>
        <ProfileUl>
          <Profile>
            <Name>이XX</Name>
            <a href="https://github.com/" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Profile>
          <Profile>
            <Name>문XX</Name>
            <a href="https://github.com/" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Profile>
          <Profile>
            <Name>이XX</Name>
            <a href="https://github.com/" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Profile>
          <Profile>
            <Name>이XX</Name>
            <a href="https://github.com/" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Profile>
          <Profile>
            <Name>이XX</Name>
            <a href="https://github.com/" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Profile>
        </ProfileUl>
      </div>
    </>
  );
};

export default About;
