// main Home page
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeTitle>"어디로 배달해드릴까요?"</HomeTitle>
        <HomeBox>
          <SearchBar />
        </HomeBox>
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
  m-5
`;

export default Home;
