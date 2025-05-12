// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import SchuldenfreiPage from "@features/schuldenfrei/SchuldenfreiPage";
import AppLayout from "@layout/AppLayout";
import IndexPage from "@pages/IndexPage"; // <– NEU

const router = createBrowserRouter([
  {
    path: "/freivestor",
    element: (
      <AppLayout>
        <IndexPage /> {/* Startseite statt Schuldenfrei */}
      </AppLayout>
    ),
  },
  {
    path: "/tools/schuldenfrei",
    element: (
      <AppLayout>
        <SchuldenfreiPage />
      </AppLayout>
    ),
  },
]);

export default router;
