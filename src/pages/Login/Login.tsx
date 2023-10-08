import { useContext } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";

import { Register } from "../Register/Register";
import { Principal } from "../Principal/Principal";

import "./Login.css";

export const Login = () => {
  const { handleChangePage } = useContext(PrincipalContext);

  return (
    <>
      <h2 className="login-title titles">Full Kong</h2>
      <div className="login-container">
        <div>
          <form className="login-form">
            <input type="text" name="usuario" placeholder="Usuario" />
            <input type="password" name="password" placeholder="Contraseña" />

            <pre className="login-registrarse">
              {" "}
              ¿Aún no tienes una cuenta?
              <button
                type="button"
                onClick={() => {
                  handleChangePage(<Register />);
                }}
              >
                Registrate
              </button>
            </pre>

            <button
              className="login-iniciar text"
              type="button"
              onClick={() => {
                handleChangePage(<Principal />);
              }}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
