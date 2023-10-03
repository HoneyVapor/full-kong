import { createContext, useState } from "react";

import { Login } from "../pages/Login/Login";

type PrincipalContextProviderProps = {
  children: React.ReactNode;
};

type PrincipalContextProps = {
  actualPage: React.ReactNode;
  handleChangePage: (newPage: React.ReactNode) => void;
};

export const PrincipalContext = createContext<PrincipalContextProps>({
  actualPage: <Login />,
  handleChangePage: () => {},
});

export const PrincipalContextProvider: React.FC<
  PrincipalContextProviderProps
> = (props) => {
  const [actualPage, setActualPage] = useState<React.ReactNode>(<Login />);

  const handleChangePage = (newPage: React.ReactNode) => {
    setActualPage(newPage);
  };

  return (
    <PrincipalContext.Provider
      value={{
        actualPage,
        handleChangePage,
      }}
    >
      {props.children}
    </PrincipalContext.Provider>
  );
};
