import { Outlet } from "react-router-dom";

import React from "react";
import Example from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import Drop from "../components/drop down/Drop";
import Banner1 from "../components/category/Banner1";
import Home_Product from "../components/product/Home_Product";
import { Rate } from "antd";
import { HeartFilled } from "@ant-design/icons";

export default function Root() {
  return (
    <>
      <div>
        <Example />
        <Outlet />
        {/* <Home_Product /> */}

        {/* <Footer /> */}
      </div>
    </>
  );
}
