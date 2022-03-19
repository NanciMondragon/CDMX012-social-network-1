//eslint-disable-next-line import/no-cycle
//SPA Inicio de Sesión

import { onNavigate } from "../main.js";

export const Login = () => {
  const HomeDiv = document.createElement("div");
  HomeDiv.className ="HomeDiv";
  const nodoH1 = document.createElement("h1");
  const nodoH2 = document.createElement("h2");
  const inputMail = document.createElement("input");
  inputMail.className = "inputName"
  const inputPassword = document.createElement("input");
  inputPassword.className = "inputName"
  const nodoH6=document.createElement('h6');
  const buttonSesion = document.createElement("button");
  buttonSesion.className = "buttonHome"
  const buttonHome = document.createElement("button");
  buttonHome.className="buttonHome"

  //document.getElementById('#inputName').placeholder='nombre';
  inputMail.textContent= "Correo Electronico";
  inputPassword.textContent="Contraseña";  
  buttonSesion.textContent = "Iniciar Sesión";

  buttonHome.textContent = "Regresa a Home";
  buttonHome.addEventListener("click", () => {
    onNavigate("/");
  });
  nodoH1.textContent = "Triptime";
  nodoH2.textContent = "Comparte experiencias auténticas de viaje"
  nodoH6.textContent = "¿Olvidaste tu contraseña?"

  HomeDiv.append(nodoH1, nodoH2, inputMail, inputPassword, nodoH6, buttonSesion, buttonHome);
  return HomeDiv;
};
