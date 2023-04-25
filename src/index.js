import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './App';
import {RouterProvider} from "react-router-dom"
import { createRoot } from "react-dom/client"


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
