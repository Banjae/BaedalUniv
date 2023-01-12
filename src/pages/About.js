//  About members page
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// tailwind-styled-component
import tw from "tailwind-styled-components";
// AOS 적용
import AOS from "aos";
import "aos/dist/aos.css";

const ProfileUl = tw.ul`
  flex
  flex-col
  justify-between
  items-center
  `;

const ProfileLi = tw.li`
  flex
`;

const Profile = tw.div`

  w-32
  h-64
  bg-slate-300
  shadow-lg
  rounded-lg
  m-2
`;

const Name = tw.div`
  text-2xl
`;

const About = () => {
  useEffect(() => {
    AOS.init();
  });

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
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>반XX</Name>
              <a href="https://github.com/Banjae" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>옥XX</Name>
              <a href="https://github.com/dev-jiji" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>조XX</Name>
              <a href="https://github.com/choj96" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Profile>
          </ProfileLi>
        </ProfileUl>
        <div>BE Members</div>
        <ProfileUl>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>이XX</Name>
              <a href="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>문XX</Name>
              <a href="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>이XX</Name>
              <a href="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>이XX</Name>
              <a href="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>이XX</Name>
              <a href="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Profile>
          </ProfileLi>
        </ProfileUl>
      </div>
    </>
  );
};

export default About;
