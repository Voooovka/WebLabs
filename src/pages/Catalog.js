ximport React, { useContext } from "react";
import Wrapper from "../components/Cards/Wrapper";
import CatalogList from "../components/Catalog/CatalogList";
import Filters from "../components/Filters/Filters";
import Loading from "../components/Loading/Loading";
import { GlobalContext } from "../context/GlobalState";

const Catalogue = () => {
  const { helicopters } = useContext(GlobalContext);

  if (!helicopters.length) {
    return <Wrapper><Loading /></Wrapper>
  }

  return (
    <Wrapper>
      <Filters />
      <CatalogList />
    </Wrapper>
  );
};

export default Catalogue;
