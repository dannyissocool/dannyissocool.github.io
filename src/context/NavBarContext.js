import React, { useState, createContext, useEffect } from 'react';

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <NavBarContext.Provider value={{ open, setOpen }}>
      {children}
    </NavBarContext.Provider>
  );
};
