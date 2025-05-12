
import { createBrowserRouter } from "react-router-dom";
import SchuldenfreiPage from "@features/schuldenfrei/SchuldenfreiPage";

// Später können hier weitere Tools ergänzt werden
export const router = createBrowserRouter([
  {
    path: "/freivestor",
    element: <SchuldenfreiPage />,
  },
]);
