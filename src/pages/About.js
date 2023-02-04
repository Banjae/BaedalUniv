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

  const frontMemberList = [
    {
      name: "반재원 (팀장)",
      content: "Home / Shop",
      image: "jaewon",
      link: "https://github.com/Banjae",
    },
    {
      name: "조준영",
      content: "Order / Cart",
      image: "jun",
      link: "https://github.com/choj96",
    },
    {
      name: "옥지은",
      content: "Login / Signup",
      image: "jieun",
      link: "https://github.com/dev-jiji",
    },
  ];

  const backMemberList = [
    {
      name: "이영은 (팀장)",
      content: "회원정보API",
      image: "기뉴(new)",
      link: "https://github.com/",
    },
    {
      name: "문주영",
      content: "가게정보API",
      image: "리쿰(new)",
      link: "https://github.com/",
    },
    {
      name: "우민경",
      content: "이미지API",
      image: "굴드(new)",
      link: "https://github.com/",
    },
    {
      name: "이민석",
      content: "관리자API",
      image: "바타(new)",
      link: "https://github.com/",
    },
    {
      name: "이호진",
      content: "메뉴API",
      image: "지스(new)",
      link: "https://github.com/",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div>
        <div className="text-center text-4xl m-3">FE Members</div>
        <ProfileUl>
          {frontMemberList.map((ele, idx) => {
            console.log(ele.image);
            return (
              <ProfileLi
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                key={idx}
              >
                <Profile>
                  <Name>{ele.name}</Name>
                  <PorfileCenter>
                    <ProfilePic>
                      <Img
                        src={require(`../assets/${ele.image}.jpg`)}
                        alt="사진"
                      />
                    </ProfilePic>
                    <ProfileP>
                      담당파트
                      <br />
                      {ele.content}
                    </ProfileP>
                  </PorfileCenter>
                  <Link to={ele.link} target="blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </Profile>
              </ProfileLi>
            );
          })}
        </ProfileUl>

        <div className="text-center text-4xl m-3">BE Members</div>
        <ProfileUl>
          {backMemberList.map((ele, idx) => {
            return (
              <ProfileLi data-aos="zoom-in" data-aos-duration="3000" key={idx}>
                <Profile>
                  <Name>{ele.name}</Name>
                  <PorfileCenter>
                    <ProfilePic>
                      <Img
                        src={require(`../assets/${ele.image}.png`)}
                        alt="사진"
                      />
                    </ProfilePic>
                    <ProfileP>
                      담당파트
                      <br />
                      {ele.content}
                    </ProfileP>
                  </PorfileCenter>
                  <Link to={ele.link} target="blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </Profile>
              </ProfileLi>
            );
          })}
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
  flex
  items-center
`;

const Img = tw.img`
  w-[90%]
  h-[90%]
  rounded-lg
  mx-auto
`;

export default About;
