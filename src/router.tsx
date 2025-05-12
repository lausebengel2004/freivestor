import IndexPage from "@pages/IndexPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/freivestor/",
    element: <IndexPage />,
  },
]);

export default router;