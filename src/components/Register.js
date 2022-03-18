//eslint-disable-next-line import/no-cycle

import { onNavigate } from "../main.js";

export const Register = () => {
  const HomeDiv = document.createElement("div");
  const nodoH2 = document.createElement("h2");
  const buttonHome = document.createElement("button");

  buttonHome.textContent = "Regresa a Home";
  buttonHome.addEventListener("click", () => {
    onNavigate("/");
  });
  nodoH2.textContent = "Regresar a Home";

  HomeDiv.append(nodoH2, buttonHome);
  return HomeDiv;
};
