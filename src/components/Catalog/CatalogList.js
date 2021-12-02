import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import CatalogCard from "../Catalog/CatalogCard";
import Loading from "../Loading/Loading";
import NoDataText from "../NoDataText/NoDataText";

const CatalogList = () => {
  const { helicopters, searchKeyword } = useContext(GlobalContext);

  const filteredHelicopters = helicopters.filter((helicopter) =>
    helicopter.name.toLowerCase().includes(searchKeyword)
  );

  if (!helicopters.length) {
    return <Loading />
  }

  return (
    <React.Fragment>
      {filteredHelicopters.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredHelicopters.map((helicopter) => (
              <CatalogCard key={helicopter.id} helicopter={helicopter} />
            ))}
          </div>
        </React.Fragment>
      ) : (
        <NoDataText text="No data text"/>
      )}
    </React.Fragment>
  );
};

export default CatalogList;
