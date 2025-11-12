import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer";
import Slider from "../Slider";

const MainLayout = () => {
  useEffect(() => {
      document.title = "Home";
    });
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <section className="slider">
          {/* <Slider /> */}
        </section>
        <section>
          <Outlet />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
