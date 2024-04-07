import React, { useMemo, useState } from "react";

import "./Home.css";
import Card_home from "../cart/Cart_home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import product1 from "../../img/product-img/product-1.jpg";
import product2 from "../../img/product-img/product-2.jpg";
import product3 from "../../img/product-img/product-3.jpg";
import product4 from "../../img/product-img/product-4.jpg";
import product5 from "../../img/product-img/product-5.jpg";
import product6 from "../../img/product-img/product-6.jpg";
import product7 from "../../img/product-img/product-7.jpg";
import product8 from "../../img/product-img/product-8.jpg";

function Home_Product() {
  const data = [
    {
      img1: product1,
      img2: product2,
    },
    { img1: product3, img2: product4 },
    { img1: product5, img2: product6 },
    { img1: product7, img2: product8 },
    { img1: product3, img2: product4 },
    { img1: product5, img2: product6 },
    { img1: product5, img2: product6 },
    { img1: product7, img2: product8 },
  ];
  return (
    <div
      data-aos='fade-right'
      data-aos-offset='300'
      data-aos-easing='ease-in-sine'
      className='ml-[30px]'>
      <div>
        <h2 className='mt-[40px] text-center text-[3em] font-bold tracking-[0.5px]'>
          Popular Products
        </h2>
      </div>
      <div className=' px-[100px] mt-[50px]'>
        {" "}
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className='mySwiper'>
          {data.map((item, index) => (
            <SwiperSlide className='px-[10px]' key={index}>
              <Card_home item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home_Product;
