import React from "react";
import helicopter from "../../images/helicopter.svg";

const Card = (props) => {
  return (
    <div className="w-full bg-white-500 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center border-solid border-2 border-gray-800">
      <div className="mb-8">
        <img className="h-36 w-36" src={helicopter} alt="" />
      </div>
      <div className="text-center">
        <p className="text-xl text-black font-bold mb-2">{props.helicopter.name}</p>
        <p className="text-base text-black-300 f ont-normal">
          Num of passengers: {props.helicopter.numOfPassengers}
        </p>
        <p className="text-base text-black-300 f ont-normal">
          Max speed: {props.helicopter.maxSpeed}
        </p>
        <p className="text-base text-black-300 f ont-normal">
          Type: {props.helicopter.type}
        </p>
        <p className="text-base text-black-300 f ont-normal">
          Value: <b>{props.helicopter.value}$</b>
        </p>
      </div>
    </div>
  );
};

export default Card;
