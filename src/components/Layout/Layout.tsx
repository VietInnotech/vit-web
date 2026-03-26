import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />
      <main style={{ minHeight: "60vh" }}>
        <Suspense fallback={<div className="route-loading">Đang tải nội dung...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
