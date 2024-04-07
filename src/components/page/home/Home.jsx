import React from "react";

import Banner1 from "../../category/Banner1";
import Banner from "../../banner/Banner";
import Home_Product from "../../product/Home_Product";
import Logo_banner from "../../logo/Logo_banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../layout/footer/Footer";
function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Banner />
      <Banner1 />
      <Home_Product />
      <Logo_banner />
      <Footer />
    </>
  );
}

export default Home;
