// Este es el punto de entrada de tu aplicacion
/* 
import { myFunction } from './lib/index.js';

myFunction();
 */

import { Home } from "./components/Home.js";
import { Register } from "./components/Register.js";
import { Login } from "./components/Login.js";

const rootDiv = document.getElementById("root");

const routes = {
  "/": Home,
  "/register": Register,
  "/login": Login,

  //'/contact' : contact,
  //'/about' : about
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};
window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};

let component = routes[window.location.pathname];
rootDiv.appendChild(component());
