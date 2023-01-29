//  About members page
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// tailwind-styled-component
import tw from "tailwind-styled-components";
// AOS 적용
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  });

  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div>
        <div className="text-center text-2xl">FE Members</div>
        <ProfileUl>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>반재원</Name>
              <PorfileCenter>
                <ProfilePic></ProfilePic>
                <ProfileP>
                  담당파트
                  <br />
                  홈 / 상점 
                </ProfileP>
              </PorfileCenter>
              <Link to="https://github.com/Banjae" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>옥지은</Name>
              <Link to="https://github.com/dev-jiji" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>조준영</Name>
              <Link to="https://github.com/choj96" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Profile>
          </ProfileLi>
        </ProfileUl>
        <div>BE Members</div>
        <ProfileUl>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>이영은</Name>
              <Link to="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>문주영</Name>
              <Link to="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>우민경</Name>
              <Link to="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>이민석</Name>
              <Link to="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Profile>
          </ProfileLi>
          <ProfileLi data-aos="zoom-in" data-aos-duration="3000">
            <Profile>
              <Name>이호진</Name>
              <Link to="https://github.com/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Profile>
          </ProfileLi>
        </ProfileUl>
      </div>
    </>
  );
};

const ProfileUl = tw.ul`
  flex
  flex-col
  h-auto
  w-full
  `;

const ProfileLi = tw.li`
  flex
  justify-center
`;

const Profile = tw.div`
  flex
  flex-col
  items-center
  justify-center
  bg-slate-300
  shadow-lg
  rounded-lg
  p-4
  m-4
  w-[70%]
  md:w-[40%]
  text-[50px]
  `;

const Name = tw.div`
  text-3xl
  mb-5
`;

const PorfileCenter = tw.div`
  flex
  justify-around
  w-[80%]
  h-[80%]
  mb-5
`;

const ProfileP = tw.p`
  flex
  items-center
  justify-start
  text-xl
`;

const ProfilePic = tw.div`
  w-[200px]
  h-[200px]
  rounded-lg
  bg-main
  m-1
`;

export default About;
