import { createContext, useContext, useEffect, useState } from "react";
import { collections } from "../utilities/productfetch";

const ProdContext = createContext();

function ProductContext({ children }) {
  const [collection, setCollections] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [filtername, setFiltername] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    category: { Men: false, Women: false, Kids: false },
    type: { Topwear: false, Bottomwear: false, Winterwear: false },
    sort: "",
  });

  useEffect(function () {
    collections().then((data) => setCollections(data.prod));
    setFilteredCollection(collection);
  }, []);

  useEffect(
    function () {
      if (filtername.length > 0) {
        // console.log("yes");
        const [filter, active] = filtername[1].split("-");
        const res = collection.filter((item) => {
          let filtering;
          if (filtername[0] === "category") {
            filtering =
              active === "true"
                ? item.category === filter
                : item.category !== filter;
          }
          if (filtername[0] === "type") {
            filtering =
              active === "true"
                ? item.subCategory === filter
                : item.subCategory !== filter;
          }
          // console.log(filtering);
          return filtering;
        });

        active === "true"
          ? setFilteredCollection((prev) => [...prev, ...res])
          : setFilteredCollection((prev) => {
              const data = prev.filter((item) => {
                if (filtername[0] === "category") {
                  return item.category !== filter;
                }
                if (filtername[0] === "type") {
                  return item.subCategory !== filter;
                }
              });
              return data;
            });
      }
    },
    [filtername, collection]
  );

  function relatedProducts(category, subCategory) {
    return collection.filter(
      (prod) => prod.category === category && prod.subCategory === subCategory
    );
  }

  return (
    <ProdContext.Provider
      value={{
        collection,
        setFilterCriteria,
        filterCriteria,
        setFiltername,
        filteredCollection,
        relatedProducts,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
}

function useProd() {
  const context = useContext(ProdContext);
  return context;
}

export { useProd, ProductContext };
