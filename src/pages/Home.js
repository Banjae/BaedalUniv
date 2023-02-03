// main Home page
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeTitle>
          "어디로 <span className=" font-bold">배달</span>
          해드릴까요?"
        </HomeTitle>
        <HomeBox>
          <SearchBar />
        </HomeBox>
        <HomeSloganBox>
          <HomeSlogan>
            <span className="text-main font-bold">배달대</span>는 배달비가 
            <span className="font-bold"> 무료</span>
          </HomeSlogan>
        </HomeSloganBox>
        <Banner />
      </HomeContainer>
    </>
  );
};

const HomeContainer = tw.div`
  text-center
  w-4/5
  my-0
  mx-auto
`;
const HomeTitle = tw.div`
  text-2xl
`;
const HomeBox = tw.div`
  m-10
`;
const HomeSloganBox = tw.div`
  mx-auto
  my-20
`;
const HomeSlogan = tw.p`
  text-4xl
`;

export default Home;
