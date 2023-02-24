import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";

const routes = createBrowserRouter([
{path: "/", element: <Homepage/>,},
{path: "dash", element: <Dashboard />,}
]   
)

export default routes;