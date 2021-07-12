import React, { useState, createContext, useEffect } from 'react';

export const ScrollAnimationContext = createContext();

export const ScrollAnimationProvider = ({ children }) => {
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {});

  return (
    <ScrollAnimationContext.Provider value={{ onScreen, setOnScreen }}>
      {children}
    </ScrollAnimationContext.Provider>
  );
};
