import { useContext } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";

import { Register } from "../Register/Register";
import { Principal } from "../Principal/Principal";

import "./Login.css";

export const Login = () => {
  const { handleChangePage } = useContext(PrincipalContext);






  

  return (
    <>
<<<<<<< HEAD
      <h2 className="login-title titles">Full Kong</h2>
      <div className="login-container">
        <div>
          <form className="login-form">
            <input type="text" name="usuario" placeholder="Usuario" />
            <input type="password" name="password" placeholder="Contraseña" />

            <pre className="login-registrarse">
              {" "}
              ¿Aún no tienes una cuenta?
=======
    
      <h2 className="login-title titles">Full Kong</h2>
      <div className="login-container">

        <div>

          <form className="login-form">

            <input type="text" name="usuario" placeholder="Usuario"/>
            <input type="password" name="password" placeholder="Contraseña"/>

            <pre className="login-registrarse"> ¿Aún  no tienes una cuenta? 
>>>>>>> e60bd0f522f9f54d83cbbc15742eac94ff20b609
              <button
                type="button"
                onClick={() => {
                  handleChangePage(<Register />);
<<<<<<< HEAD
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
=======
                }}>
                 Registrate
              </button>
            </pre>

            <button className="login-iniciar text"
                type="button"
                onClick={() => {
                  handleChangePage(<Register />);
                }}>
                 Entrar
              </button>
                
>>>>>>> e60bd0f522f9f54d83cbbc15742eac94ff20b609
          </form>
        </div>

      </div>
    </>
  );
};
