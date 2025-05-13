// src/router.tsx
import IndexPage from "@pages/IndexPage";
import { createBrowserRouter } from "react-router-dom";

// 🧩 1. Exportiere die Definition für DiagnoseAgent
export const routerDefinition = [
  {
    path: "/freivestor/",
    element: <IndexPage />,
  },
];

// ✅ 2. Erstelle den Router wie gewohnt
const router = createBrowserRouter(routerDefinition);

// 🟢 3. Exportiere ihn für die App
export default router;
