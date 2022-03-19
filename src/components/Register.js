//eslint-disable-next-line import/no-cycle
//SPA Crear cuenta h
import { onNavigate } from "../main.js";

export const Register = () => {
  const HomeDiv = document.createElement("div");
  HomeDiv.className ="HomeDiv";
  const nodoH1 = document.createElement("h1");
  const nodoH2 = document.createElement("h2");
  const inputName= document.createElement("input")
  inputName.className = "inputName";
  //inputName.setAttribute("id","name");
  const inputLast= document.createElement("input");
  inputLast.className = "inputName"
  const inputMail = document.createElement("input");
  inputMail.className = "inputName"
  const inputPassword = document.createElement("input");
  inputPassword.className = "inputName"
  const buttonRegister = document.createElement("button");
  buttonRegister.className = "buttonHome"
  const buttonHome = document.createElement("button");
  buttonHome.className="buttonHome"

  //document.getElementById('#inputName').placeholder='nombre';
  inputName.textContent="Nombre";
  inputLast.textContent= "Apellido";
  inputMail.textContent= "Correo Electronico";
  inputPassword.textContent="Contraseña";
  buttonRegister.textContent = "Registrarse";

  buttonHome.textContent = "Regresa a Home";
  buttonHome.addEventListener("click", () => {
    onNavigate("/");
  });
  nodoH1.textContent = "Triptime";
  nodoH2.textContent = "Comparte experiencias auténticas de viaje"

  HomeDiv.append(nodoH1, nodoH2, inputName, inputLast, inputMail, inputPassword, buttonRegister, buttonHome);
  return HomeDiv;
};
