import React from "react";
import { Link } from "react-router-dom";
import helicopter from "../../images/helicopter.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

const CatalogCard = (props) => {
  const helicopterId = props.helicopter.id;

  const dispatch = useDispatch();

  return (
    <div className="w-full bg-black-500 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center border-solid border-2 border-gray-300">
      <div className="mb-8">
        <img className="h-36 w-36" src={helicopter} alt="" />
      </div>
      <div className="text-center">
        <p className="text-xl text-black font-bold mb-2">{props.helicopter.name}</p>
        <p className="text-base text-white-300 f ont-normal">
          Num of passengers: {props.helicopter.numOfPassengers}
        </p>
        <p className="text-base text-white-300 f ont-normal">
          Max Speed: {props.helicopter.maxSpeed}
        </p>
        <p className="text-base text-white-300 f ont-normal">
          Type: {props.helicopter.type}
        </p>
        <p className="text-base text-white-300 f ont-normal">
          Value: <b>{props.helicopter.value}$</b>
        </p>
      </div>
      <div className="flex-auto text-center pt-6">
        <Link to={`/catalog/${helicopterId}`} title="View more">
          <button className="bg-gray-200 hover:bg-blue-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
            View more
          </button>
        </Link>
        <button
          className="mt-4 bg-gray-200 hover:bg-blue-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
          onClick={() => dispatch(addToCart(props.helicopter))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;
