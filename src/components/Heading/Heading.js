import React from "react";
import helicopter from "../../images/helicopter.svg";

const Heading = (props) => {
  return (
    <div className="flex p-24 pt-0 pb-0 ">
      <img src={helicopter} alt="" className="sm:w-1/2" />
      <div className="tet-left ml-20">
        <p className="text-3xl text-black font-bold mt-10">{props.helicopter.name}</p>
        <p className="text-lg text-black font-normal my-4">
          Num of passengers: {props.helicopter.numOfPassengers}
        </p>
        <p className="text-lg text-balck font-normal my-4">
          Max speed: {props.helicopter.maxSpeed}
        </p>
        <p className="text-lg text-balck font-normal my-4">
          Type: {props.helicopter.type}
        </p>
        <p className="text-lg text-balck font-normal my-4">
          Value: <b>{props.helicopter.value}$</b>
        </p>
      </div>
    </div>
  );
};

export default Heading;
