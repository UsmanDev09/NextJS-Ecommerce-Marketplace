
import LandingPage from "../components/LandingPage/LandingPage";
import Wrapper from "../components/Wrapper/Wrapper";

const Home = (props) => (
  <Wrapper>
    <LandingPage addToCart={props.addToCart} categories={props.categories} />
  </Wrapper>
);

export default Home;
