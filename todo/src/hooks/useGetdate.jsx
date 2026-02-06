import React from "react";

export const useGetdate = () => {
  const date = new Date();

  const day = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const month = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });
  
  const ISOformat = date.toISOString();
  
  return { day, month, ISOformat };
};
