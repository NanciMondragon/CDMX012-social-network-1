# Creando una Red Social

## Índice

* [1. Preámbulo](#1-TRIPTIME ... Comparte experiencias auténticas de viaje)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales para Red Social TRIPTIME](#4-consideraciones-generales para Red Social TRIPTIME)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Entrega](#6-entrega)

## 1. TRIPTIME ... Comparte experiencias auténticas de viaje

Las redes sociales han invadido nuestras vidas, decidimos realizar una red social para viajeros
donde se pueda intercambiar consejos, leer reseñas de hoteles, buscar compañero de viaje, dar like
a publicaciones de otros viajeros... Las redes sociales están revolucionando nuestra forma de viajar. 
Si bien redes sociales más populares como Facebook o Twitter tienen buen predicamento entre muchos trotamundos, 
no deja de crecer el número de redes sociales de viajeros más especializadas. ¡Echa un vistazo a nuestra app **TRIPTIME**!

## 2. Resumen del proyecto

Nuestra Red Social permite a cualquier usuario crear una cuenta de
acceso, loguearse con ella y acceso con una cuenta Google; creaa, edita, borra y _"likear"_ publicacciones.

El objetivo principal de aprendizaje de este proyecto es construir una
**Single-page Application (SPA)** & **Es responsive para versión mobile** en la que se puede **leer y escribir datos**.

## 3. Objetivos de aprendizaje
Los Objetivos de aprendizaje alcanzados:

### HTML

- [✓] **Uso de HTML semántico**

### CSS

- [✓] **Uso de selectores de CSS**
- [✓] **Modelo de caja (box model): borde, margen, padding**
- [✓] **Uso de flexbox en CSS**
- [✓] **Uso de CSS Grid Layout**

### Web APIs

- [✓] **Uso de selectores del DOM**
- [✓] **Manejo de eventos del DOM (listeners, propagación, delegación)**
- [✓] **Manipulación dinámica del DOM**
  * Node.appendChild()
  * Document.createElement() 
  * Document.createTextNode()
  * Element.innerHTML
  * Node.textContent

- [✓] **Ruteado (History API, evento hashchange, window.location)**
  * Manipulando el historial del navegador

### JavaScript

- [✓] **Arrays (arreglos)**
- [✓] **Objetos (key, value)**
- [✓] **Diferenciar entre tipos de datos primitivos y no primitivos**
- [✓] **Variables (declaración, asignación, ámbito)**
- [✓] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
- [✓] **Uso de bucles/ciclos (while, for, for..of)**
- [✓] **Funciones (params, args, return)**
- [ ] **Pruebas unitarias (unit tests)**
- [✓] **Pruebas asíncronas**
- [ ] **Uso de mocks y espías**
- [✓] **Módulos de ECMAScript (ES Modules)**
- [✓] **Uso de linter (ESLINT)**
- [✓] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
- [✓] **Diferenciar entre expresiones (expressions) y sentencias (statements)**
- [✓] **Callbacks**
- [✓] **Promesas**

### Control de Versiones (Git y GitHub)

- [✓] **Git: Instalación y configuración**
- [✓] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [✓] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge)**
- [✓] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [✓] **GitHub: Despliegue con GitHub Pages**
- [✓] **GitHub: Colaboración en Github (branches | forks | pull requests)**

### user-centricity

- [✓] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [✓] **Crear prototipos de alta fidelidad que incluyan interacciones**
- [✓] **Seguir los principios básicos de diseño visual**

### research

- [✓] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

### Firebase

- [✓] **Firebase Auth**
- [✓] **Firestore**

## 4. Consideraciones generales para Red Social TRIPTIME

* Este proyecto se trabajo en triada.
* La lógica del proyecto esta implementada completamente en JavaScript
  (ES6+), HTML y CSS.
* Se trabajo con historias de usurio. La historia se completa cuando
  se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición
  de Terminado.

## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Definición del producto

* ¿Quiénes son los principales usuarios de producto? La red social TRIPTIME
  es utilizada por los amantes a los viajes.
* ¿Qué problema resuelve el producto / para qué le servirá a estos usuarios.?
  En esta app se pueda intercambiar consejos, leer reseñas de hoteles, buscar compañero de viaje, 
  dar like a publicaciones de otros viajeros... Las redes sociales están revolucionando nuestra 
  forma de viajar. 

### 5.2 Historias de usuario

Realizamos la planeación del proyecto en **Trello**
[Trello](https://trello.com/b/ZV4fxysN/red-social-para-viajeros)

Los criterios que consideramos para desarrollar este proyecto son:
HU1 Yo como usuario quiero registrar una cuenta de acceso con mi correo electronico
y contraseña para acceder a la red social de viajeros
HU2 Yo como usuario quiero iniciar sesión con una cuenta existente de correo
electronico para acceder a la red social de viajeros
HU3 Crear un post
HU4 Likear un post (Dan)
HU5 Eliminar un post (Nan)
HU6 Editar un post (Abril)
HU7 Contar los likes de una publicación
![Historias de Usuario](/src/assets/HU.png)

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que se cumplieron
  para que, como equipo, supimos que esa historia está terminada y lista
  para publicarse. **Todas** las Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesito agregar):

  - Debe ser una SPA.
  - Debe ser _responsive_
  - Hicimos _pruebas_ de usabilidad se incorporo el _feedback_ de los
    usuarios como mejoras.
![Pruebas de Usabilidad](/src/assets/PU1.png)
![Feedback de Pruebas de Usabilidad](/src/assets/FeedbackPU.jpg)

### 5.3 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Tomamos foto de los diseños que prentendimos realizar a papel y lápiz.
![Boceto Nan](/src/assets/Nan.jpg.jpg)
![Boceto Abril](/src/assets/Abril.jpg.jpg)
![Boceto Dan](/src/assets/Dan.jpg.jpg)

### 5.4 Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Se definio cuál fue el flujo que seguirá el usuario dentro de la aplicación
y se diseño la Interfaz de Usuario, el prototipo se realiza en **Figma**
[Figma](https://www.figma.com/file/cwZQ8rbdpZQxcM0k3qQWhX/Red-Social-de-Viajeros?node-id=0%3A1)
![Prototipo Alta Fidelidad](/src/assets/AltaFidelidad.png)

### 5.5 Responsive

Se puede ver en _`mobile first`_ .
![Mobile First](/src/assets/Responsive.png)


### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ se utilizo **Firebase**
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
![Login](/src/assets/Login.png)

* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.
![Mensajes Descriptivos](/src/assets/MsjDescriptivos.png)


#### Muro/timeline

* Validaciones:
  - Al publicar se utilizo **Firestore**, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.
![Timeline](/src/assets/Timeline.png)


## 6. Entrega

#### Herramientas Github Colaborativo
Se realizó GitHub Colaborativo donde  3 autores (Abril Quintero, Daniela Carbajal & Nanci Mondragón).
Enviaron 3 confirmaciones a la principal y 3 confirmaciones a todas las ramas. En main, 15 archivos 
han cambiado y ha habido 171 adiciones y 66 eliminaciones .    
![GitHub Colaborativo](/src/assets/GitHubColaborativo.png)

