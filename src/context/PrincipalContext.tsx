import { createContext, useState } from "react";

import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";

type PrincipalContextProviderProps = {
  children: React.ReactNode;
};

type PrincipalContextProps = {
  actualPage: React.ReactNode;
  handleChangePage: (newPage: React.ReactNode) => void;

  actualScreen: React.ReactNode;
  handleChangeScreen: (newScreen: React.ReactNode) => void;
};

export const PrincipalContext = createContext<PrincipalContextProps>({
  actualPage: <Login />,
  handleChangePage: () => {},

  actualScreen: <></>,
  handleChangeScreen: () => {},
});

export const PrincipalContextProvider: React.FC<
  PrincipalContextProviderProps
> = (props) => {
  const [actualPage, setActualPage] = useState<React.ReactNode>(<Login />);
  const [actualScreen, setActualScreen] = useState<React.ReactNode>(<Home />);

  const handleChangePage = (newPage: React.ReactNode) => {
    setActualPage(newPage);
  };

  const handleChangeScreen = (newScreen: React.ReactNode) => {
    setActualScreen(newScreen);
  };

  return (
    <PrincipalContext.Provider
      value={{
        actualPage,
        handleChangePage,

        actualScreen,
        handleChangeScreen,
      }}
    >
      {props.children}
    </PrincipalContext.Provider>
  );
};
