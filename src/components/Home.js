import { onNavigate } from "../main.js";

export const Home = () => {
  const HomeDiv = document.createElement("div");
  const nodoH1 = document.createElement("h1");
  const buttonRegistrar = document.createElement("button");

  buttonRegistrar.textContent = "registrate";
  buttonRegistrar.addEventListener("click", () => {
    onNavigate("/register");
  });
  nodoH1.textContent = "Bienvenido a mi red social";

  HomeDiv.append(nodoH1, buttonRegistrar);
  return HomeDiv;
};
