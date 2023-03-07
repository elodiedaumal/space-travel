import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const handleClick = () => {
    setSidebar(!sidebar);
  };
  return (
    <AppContext.Provider
      value={{
        sidebar,
        handleClick,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
