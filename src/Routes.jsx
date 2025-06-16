import { createBrowserRouter } from "react-router";
import React from "react";
import App from "./App";
import Book from "./Pages/Book";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";  
import Malik from "./Pages/Malik"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }, 
      {
        path: "/auth",
        element: <Signup />,
      }, 
      {
        path: "/lordvasu",
        element: <Malik />,
      }, 
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
