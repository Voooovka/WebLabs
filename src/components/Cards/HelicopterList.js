import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Button from "../Button/Button";
import Card from "./Card";

const HelicopterList = () => {
  const { helicopters, searchKeyword } = useContext(GlobalContext);

  const [showMore, setShowMore] = useState(false);

  const filteredHelicopters = helicopters.filter((helicopter) =>
    helicopter.name.toLowerCase().includes(searchKeyword)
  );

  return (
    <React.Fragment>
      {filteredHelicopters.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredHelicopters.slice(0, showMore ? helicopters.length : 4).map((helicopter) => (
              <Card key={helicopter.id} helicopter={helicopter} />
            ))}
          </div>
          {filteredHelicopters.length > 4 ? (
            <div className="flex justify-center py-8">
              <Button
                onClick={() => setShowMore(!showMore)}
                label={!showMore ? "Show more" : "Show less"}
              />
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No Data</p>
      )}
    </React.Fragment>
  );
};

export default HelicopterList;
