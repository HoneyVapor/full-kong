import { useContext, useState } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";
import { Home } from "../../pages/Home/Home";

import { navbar_elements } from "../../utils/labels";
import { Tooltip } from "antd";

import "./NavBar.css";
import { Excersise } from "../../pages/excersise/Excersise";

export const NavBar = () => {
  const { handleChangeScreen, handleChangeScreenName } = useContext(PrincipalContext);
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleReloadContent = (tab: number, screen: React.ReactNode, name: string) => {
    setActiveTab(tab);
    handleChangeScreen(screen);
    handleChangeScreenName(name);
  };

  return (
    <>
      <div className="nav-bar-container">
        <div className="nav-bar">
          <Tooltip title={`${navbar_elements.home}`}>
            <div className="nav-bar-element">
              <i
                className={`bi bi-house-fill nav-bar-icon ${
                  activeTab === 1 ? "active" : ""
                }`}
                onClick={() => handleReloadContent(1, <Home />, 'Home')}
              ></i>
            </div>
          </Tooltip>

          <Tooltip title={`${navbar_elements.excersise}`}>
            <div className="nav-bar-element">
              <i
                className={`bi bi-person-arms-up nav-bar-icon ${
                  activeTab === 2 ? "active" : ""
                }`}
                onClick={() =>
                  handleReloadContent(2, <Excersise />, 'Ejercicios')
                }
              ></i>
            </div>
          </Tooltip>

          <Tooltip title={`${navbar_elements.progress}`}>
            <div className="nav-bar-element">
              <i
                className={`bi bi-calendar-check-fill nav-bar-icon ${
                  activeTab === 3 ? "active" : ""
                }`}
                onClick={() =>
                  handleReloadContent(3, <>Poner componente 'Progress' aqui</>, 'Progreso')
                }
              ></i>
            </div>
          </Tooltip>

          <Tooltip title={`${navbar_elements.profile}`}>
            <div className="nav-bar-element">
              <i
                className={`bi bi-person-fill nav-bar-icon ${
                  activeTab === 4 ? "active" : ""
                }`}
                onClick={() =>
                  handleReloadContent(4, <>Poner componente 'Profile' aqui</>, 'Perfil')
                }
              ></i>
            </div>
          </Tooltip>

          <Tooltip title={`${navbar_elements.premium}`}>
            <div className="nav-bar-element">
              <i
                className={`bi bi-diamond nav-bar-icon ${
                  activeTab === 5 ? "active" : ""
                }`}
                onClick={() =>
                  handleReloadContent(5, <>Poner componente 'Premium' aqui</>, 'Premium')
                }
              ></i>
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
};
