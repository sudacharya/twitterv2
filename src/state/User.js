import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState(" ");
  

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
