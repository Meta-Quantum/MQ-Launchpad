import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllProjects from "./pages/AllProjects/AllProjects";
import Project from "./pages/Project/Project";

const routes = createBrowserRouter([
{path: "/", element: <Homepage/>,},
{path: "dash", element: <Dashboard />},
{path:'projects', element: <AllProjects />},
{path: "mockUpProject", element: <Project />}
]   
)

export default routes;