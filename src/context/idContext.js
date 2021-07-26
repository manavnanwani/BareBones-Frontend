import React, { createContext, useState } from "react";

export const IdContext = createContext();

export const IdProvider = (props) => {
  const [currentId, setCurrentId] = useState(null);
  return (
    <IdContext.Provider value={[currentId, setCurrentId]}>
      {props.children}
    </IdContext.Provider>
  );
};
