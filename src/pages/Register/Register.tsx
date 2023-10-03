import { useState, useContext } from "react";
import { PrincipalContext } from "../../context/PrincipalContext"; //? Se importa el contexto para el cambio de pagina

import { Login } from "../Login/Login"; //? Se importa el login para cuando cambian la vista al Login

import { Input, Tooltip } from "antd"; //? Se importa el componente de Ant Design
import Swal from "sweetalert2"; //? Se importa la libreria para ventanas emergentes

import { FormValidator } from "../../lib/format"; //? Se importa la clase FormValidator
import { routes } from "../../utils/urls"; //? Se importan las rutas para la insercion de los datos
import { register_inputs } from "../../utils/labels";

import "./Register.css"; //? Se importan los estilos para este componente

export const Register = () => {
  const { handleChangePage } = useContext(PrincipalContext); //? Para cambio de pagina

  //? Se declaran variables y funciones de estados para los estatus de los inputs (avisar cuando algo esta mal)
  const [fullnameInputStatus, setFullnameInputStatus] = useState<
    "" | "error" | "warning" | undefined
  >("");
  const [usernameInputStatus, setUsernameInputStatus] = useState<
    "" | "error" | "warning" | undefined
  >("");
  const [passwordInputStatus, setPasswordInputStatus] = useState<
    "" | "error" | "warning" | undefined
  >("");
  const [phoneInputStatus, setPhoneInputStatus] = useState<
    "" | "error" | "warning" | undefined
  >("");

  type RegisData = {
    //? Tipo para crear objeto que contenga todos los datos a registrar
    name: string;
    lastname: string;
    username: string;
    password: string;
    password_confirmation: string;
    phone: string[10];
  };

  const reset_status = (): void => {
    //? Para quitar el estatus de error de los inputs
    setFullnameInputStatus("");
    setUsernameInputStatus("");
    setPasswordInputStatus("");
    setPhoneInputStatus("");
  };

  const validate_data = (data: RegisData): boolean => {
    //? Para verificar que los datos sean validos
    const form_validator = new FormValidator();
    let isValid = true;

    if (
      !form_validator.isNotEmpty(data.name) ||
      !form_validator.isNotEmpty(data.lastname)
    ) {
      setFullnameInputStatus("error");
      isValid = false;
    }
    if (!form_validator.validate_username(data.username)) {
      setUsernameInputStatus("error");
      isValid = false;
    }
    if (!form_validator.validate_password(data.password)) {
      setPasswordInputStatus("error");
      isValid = false;
    }
    if (!form_validator.validate_phone(data.phone)) {
      setPhoneInputStatus("error");
      isValid = false;
    }

    return isValid;
  };

  const get_data = (): RegisData => {
    //? Para tomar los datos del formulario
    const name_inp = document.getElementById("register-name");
    const last_inp = document.getElementById("register-lastname");
    const user_inp = document.getElementById("register-username");
    const pass_inp = document.getElementById("register-password");
    const pass2_inp = document.getElementById("register-password2");
    const phon_inp = document.getElementById("register-phone");

    let name: string = "";
    let last: string = "";
    let user: string = "";
    let pass: string = "";
    let pass2: string = "";
    let phon: string = "";

    if (
      //? Comprobacion de que los elementos del formulario son inputs
      name_inp instanceof HTMLInputElement &&
      last_inp instanceof HTMLInputElement &&
      user_inp instanceof HTMLInputElement &&
      pass_inp instanceof HTMLInputElement &&
      pass2_inp instanceof HTMLInputElement &&
      phon_inp instanceof HTMLInputElement
    ) {
      //? Se toman los valores del formulario
      name += name_inp.value;
      last += last_inp.value;
      user += user_inp.value;
      pass += pass_inp.value;
      pass2 += pass2_inp.value;
      phon += phon_inp.value;
    }

    return {
      name: `${name}`,
      lastname: `${last}`,
      username: `${user}`,
      password: `${pass}`,
      password_confirmation: `${pass2}`,
      phone: `${phon}`,
    };
  };

  const handleSubmit = () => {
    //? Funcion para cuando se envia el formulario

    const data = get_data(); //? Se obtienen los datos
    if (validate_data(data)) {
      //? Si son validos
      $.ajax({
        //? Se mandan registrar
        url: routes.session.register,
        type: "POST",
        data: {
          user_data: data,
        },
        success: (response) => {
          console.log(response);
        },
        error: (err, stat) => {
          console.error(err);
          console.error(stat);
        },
      });

      reset_status();
    } else {
      //? En caso de no ser validos, se muestra mensaje de verificacion
      Swal.fire({
        text: "Por favor verifique los datos",
        position: "top-end",
      });
    }
  };

  return (
    <>
      <div className="register-principal-container">
        <div className="register-top-bar">
          <i
            className="bi bi-arrow-90deg-left float-start m-3"
            id="register-return-icon"
            role="button"
            onClick={() => {
              handleChangePage(<Login />);
            }}
          ></i>{" "}
          <p className="titles">Registro</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-5">
              <Tooltip placement="bottomLeft" title={register_inputs.name}>
                <Input
                  className="mb-4 p-3 inp-rounded text-scnd"
                  name="register-name"
                  id="register-name"
                  placeholder="Nombre(s)"
                  status={fullnameInputStatus}
                />
              </Tooltip>
              <Tooltip placement="bottomLeft" title={register_inputs.last}>
                <Input
                  className="mb-4 p-3 inp-rounded text-scnd"
                  name="register-lastname"
                  id="register-lastname"
                  placeholder="Apellido(s)"
                  status={fullnameInputStatus}
                />
              </Tooltip>
              <Tooltip placement="bottomLeft" title={register_inputs.user}>
                <Input
                  className="mb-4 p-3 inp-rounded text-scnd"
                  name="register-username"
                  id="register-username"
                  placeholder="Usuario"
                  status={usernameInputStatus}
                />
              </Tooltip>
              <Tooltip placement="bottomLeft" title={register_inputs.pass}>
                <Input.Password
                  className="p-3 mb-4 inp-rounded text-scnd"
                  name="register-password"
                  id="register-password"
                  placeholder="Contraseña"
                  status={passwordInputStatus}
                />
              </Tooltip>
              <Tooltip placement="bottomLeft" title={register_inputs.pass2}>
                <Input.Password
                  className="p-3 mb-4 inp-rounded text-scnd"
                  name="register-password2"
                  id="register-password2"
                  placeholder="Confirmar contraseña"
                  status={passwordInputStatus}
                />
              </Tooltip>
              <Tooltip placement="bottomLeft" title={register_inputs.phon}>
                <Input
                  className="mb-4 p-3 inp-rounded text-scnd"
                  type="text"
                  name="register-phone"
                  id="register-phone"
                  placeholder="Telefono"
                  status={phoneInputStatus}
                />
              </Tooltip>

              <button
                className="btn float-end text"
                type="button"
                id="register-send-btn"
                onClick={handleSubmit}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
