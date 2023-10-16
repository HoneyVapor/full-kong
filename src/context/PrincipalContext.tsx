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

  actualScreenName: string;
  handleChangeScreenName: (newName: string) => void;
};

export const PrincipalContext = createContext<PrincipalContextProps>({
  actualPage: <Login />,
  handleChangePage: () => {},

  actualScreen: <></>,
  handleChangeScreen: () => {},

  actualScreenName: "",
  handleChangeScreenName: () => {},
});

export const PrincipalContextProvider: React.FC<
  PrincipalContextProviderProps
> = (props) => {
  const [actualPage, setActualPage] = useState<React.ReactNode>(<Login />);
  const [actualScreen, setActualScreen] = useState<React.ReactNode>(<Home />);
  const [actualScreenName, setActualScreenName] = useState<string>("Home");

  const handleChangePage = (newPage: React.ReactNode) => {
    setActualPage(newPage);
  };

  const handleChangeScreen = (newScreen: React.ReactNode) => {
    setActualScreen(newScreen);
  };

  const handleChangeScreenName = (newName: string) => {
    setActualScreenName(newName);
  };

  return (
    <PrincipalContext.Provider
      value={{
        actualPage,
        handleChangePage,

        actualScreen,
        handleChangeScreen,

        actualScreenName,
        handleChangeScreenName,
      }}
    >
      {props.children}
    </PrincipalContext.Provider>
  );
};