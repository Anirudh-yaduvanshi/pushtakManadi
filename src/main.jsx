import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Bookstate from './Context/Bookstate';

import { RouterProvider } from "react-router";
import router from "./Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Bookstate>
      <RouterProvider router={router} />
    </Bookstate>
  </StrictMode>
  
);
  