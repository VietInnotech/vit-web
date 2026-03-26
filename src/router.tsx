import Layout from "@/components/Layout/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const SanPham = lazy(() => import("@/pages/SanPham"));
const PhongHocOMO = lazy(() => import("@/pages/PhongHocOMO"));
const PhanMemOMO = lazy(() => import("@/pages/PhanMemOMO"));
const LienHe = lazy(() => import("@/pages/LienHe"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "san-pham", element: <SanPham /> },
      { path: "san-pham/phong-hoc-omo", element: <PhongHocOMO /> },
      { path: "phan-mem-omo", element: <PhanMemOMO /> },
      { path: "lien-he", element: <LienHe /> },
    ],
  },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <Navigate to="404" replace /> },
]);
