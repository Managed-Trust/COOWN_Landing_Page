import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import './sass/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter> 
   </React.StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "./sass/index.scss";

// import { AuthClient } from "@dfinity/auth-client";
// import { Principal } from "@dfinity/principal";

// const init = async () => {
//   const authClient = await AuthClient.create();

//   if (await authClient.isAuthenticated()) {
//     handleAuthenticated(authClient);
//   } else {
//     await authClient.login({
//       identityProvider: "https://identity.ic0.app/#authorize",
//       onSuccess: () => {
//         handleAuthenticated(authClient);
//       },
//     });
//   }
// };

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //      <BrowserRouter>
// //       <App />
// //     </BrowserRouter>
// //    </React.StrictMode>
// // );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// async function handleAuthenticated(authClient) {
//   const identity = await authClient.getIdentity();
//   let userPrincipal = identity;
//   if (identity._principal.toString()) {
//      userPrincipal = (identity._principal.toString());
//   } else {
//      userPrincipal = identity;
//   }
//   // console.log(identity._principal.toString());

//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App loggedInPrincipal={identity} />
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// }

// init();
