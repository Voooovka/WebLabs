import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import Wrapper from "../components/Cards/Wrapper";
import Heading from "../components/Heading/Heading";
import { GlobalContext } from "../context/GlobalState";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const HelicopterDetails = (route) => {
  let history = useHistory();

  const dispatch = useDispatch();

  const { helicopters } = useContext(GlobalContext);

  const [selectedHelicopter, setSelectedHelicopter] = useState({
    id: null,
    name: null,
    numOfPassengers: null,
    maxSpeed: null,
    type: null,
    value: null,
  });

  const currentHelicopterId = route.match.params.id;

  useEffect(() => {
    const helicopterId = currentHelicopterId;
    const selectedHelicopter = helicopters.find(
      (currentHelicopterTraversal) => currentHelicopterTraversal.id === parseInt(helicopterId)
    );
    setSelectedHelicopter(selectedHelicopter);
  }, [currentHelicopterId, helicopters]);

  return (
    <div>
      <Wrapper>
        <Heading helicopter={selectedHelicopter} />
        <div className="flex justify-end py-8">
          <Button label="Go back" onClick={() => history.push("/catalog")} />
          <Button label="Add to cart" onClick={() => dispatch(addToCart(selectedHelicopter))} />
        </div>
      </Wrapper>
    </div>
  );
};

export default HelicopterDetails;
