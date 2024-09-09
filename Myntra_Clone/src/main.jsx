import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "./bag.css"
import Bag from "./routes/Bag.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import {Provider} from "react-redux"
import myntraStore from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter([
  //react routing
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> }, //home page
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore} >
    <RouterProvider router={router} ></RouterProvider>
    </Provider>
  </StrictMode>
);
