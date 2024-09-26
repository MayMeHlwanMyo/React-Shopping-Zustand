import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/router";


const root = document.querySelector("#root");
createRoot(root).render(<RouterProvider router={router} />);



