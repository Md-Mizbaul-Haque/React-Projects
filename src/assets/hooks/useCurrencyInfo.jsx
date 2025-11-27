import React from "react";
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const data = await res.json();
        setData(data[currency]);
      } catch (err) {
        console.log("error to fetch data", err);
      }
    }
    fetchData();
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
