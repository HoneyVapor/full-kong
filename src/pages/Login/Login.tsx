import { useContext } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";

import { Principal } from "../Principal/Principal";
import { Register } from "../Register/Register";

import "./Login.css";

export const Login = () => {
  const { handleChangePage } = useContext(PrincipalContext);

  return (
    <>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center pt-5">
          <p className="text-scnd"> Aqui se mete el login... &nbsp; </p>

          <button
            className="btn text-scnd"
            type="button"
            onClick={() => handleChangePage(<Principal />)}
          >
            Entrar
          </button>

          <button
            className="btn btn-primary text-scnd"
            type="button"
            onClick={() => handleChangePage(<Register />)}
          >
            Registrate
          </button>
        </div>
      </div>
    </>
  );
};
