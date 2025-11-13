import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer";
import Slider from "../Slider";
import Loading from "../Loading/Loading";

const MainLayout = () => {
  useEffect(() => {
      document.title = "Home";
    });
    const {state} = useNavigation()
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <section className="slider">
          {/* <Slider /> */}
        </section>
        <section>

        {state=="loading" ? <Loading></Loading>  : <Outlet /> } 

        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
