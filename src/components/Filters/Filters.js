import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Checkbox from "./Checkbox";
import helicoptersApi from "../../api/api";

const Filters = () => {
  const [checkboxNames, setCheckboxNames] = useState([]);

  const { filters, setFilters } = useContext(GlobalContext);

  useEffect(() => {
    helicoptersApi
      .getHelicopterTypes()
      .then(({ data }) => setCheckboxNames(data))
      .catch((err) => console.log(err));
  }, []);

  const handleToggle = ({ name }) => {
    if (filters.indexOf(name) === -1) {
      setFilters([...filters, name]);
    } else {
      setFilters(filters.filter((n) => n !== name));
    }
  };

  return (
    <div className="block pb-10 flex space-x-8">
      <p className="text-xl text-gray-500 font-bold">Type filters</p>
      <div className="flex space-x-8 center">
        {checkboxNames.map((name) => (
          <Checkbox
            key={name}
            name={name}
            onChange={() => handleToggle({ name })}
            checked={filters.indexOf(name) !== -1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;