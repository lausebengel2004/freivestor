
import { createBrowserRouter } from "react-router-dom";
import SchuldenfreiPage from "@features/schuldenfrei/SchuldenfreiPage";
import AppLayout from "@layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/freivestor",
    element: (
      <AppLayout>
        <SchuldenfreiPage />
      </AppLayout>
    ),
  },
]);

export default router;
