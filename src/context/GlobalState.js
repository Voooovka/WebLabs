import React, { createContext, useEffect, useState } from "react";
import helicoptersApi from "../api/api";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filters, setFilters] = useState([]);
  const [helicopters, setHelicopters] = useState([]);

  useEffect(() => {
    helicoptersApi
      .getHelicopters(filters)
      .then(({ data }) => setHelicopters(data))
      .catch((err) => console.log(err));
  }, [filters]);

  return (
    <GlobalContext.Provider
      value={{
        helicopters,
        searchKeyword,
        filters,
        setSearchKeyword,
        setFilters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
