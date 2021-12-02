import React, { useContext } from "react";
import Wrapper from "../components/Cards/Wrapper";
import HelicopterList from "../components/Cards/HelicopterList";
import Heading from "../components/Heading/Heading";
import ListingTitle from "../components/Menu/ListingTitle";
import { GlobalContext } from "../context/GlobalState";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const { helicopters, isLoading } = useContext(GlobalContext);

  const firstHelicopter = helicopters[0];

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {helicopters.length > 0 ? <Heading helicopter={firstHelicopter} /> : ""}
      <div className="my-6 flex justify-between">
        <ListingTitle />
      </div>
      <HelicopterList />
    </Wrapper>
  );
};

export default Home;
