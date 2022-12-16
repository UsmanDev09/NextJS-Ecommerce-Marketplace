import type { NextPage } from "next";

import LandingPage from "../components/LandingPage/LandingPage";
import Wrapper from "../components/Wrapper/Wrapper";

const Home: NextPage = (props:any) => (
  <Wrapper>
    <LandingPage addToCart={props.addToCart} categories={props.categories} />
  </Wrapper>
);

export default Home;
