import React from "react";
import "./Banner1.css";
import bg_1 from "../../img/bg-img/bg-2.jpg";
import bg_2 from "../../img/bg-img/bg-3.jpg";
import bg_3 from "../../img/bg-img/bg-4.jpg";

export default function Banner1() {
  const imageBn = [
    {
      title: "Clothing",
      img: bg_1,
    },
    {
      title: "Shoes",
      img: bg_2,
    },
    {
      title: "ACCESSORIES",
      img: bg_3,
    },
  ];
  return (
    <>
      <div className='w-full mt-[50px]  flex justify-evenly items-center '>
        <div className='grid grid-cols-3 gap-6'>
          {imageBn.map((item, index) => (
            <div
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1500'
              key={index}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
              className='banner1  w-[400px] h-[300px] flex justify-center items-center '>
              <div className='w-[100%] h-[100%] bg-white opacity-50'></div>
              <a
                href='#'
                className='absolute text-[2em] font-extrabold uppercase tracking-[.1em] hover:text-[#007bff] transition duration-700 ease'>
                {item.title}
              </a>
            </div>
          ))}
          <div
            data-aos='fade-up'
            className='col-span-3 relative  h-[500px] banner1 banner1_img w-[100%]'>
            <div className=' absolute top-[20%] left-[60%] '>
              <p className=' text-[#dc0345] text-[1.5em] font-bold '>-60%</p>
              <h2 className=' text-[4em] font-bold mb-[40px] mt-[-10px] tracking-[.05em] '>
                Global Sale
              </h2>
              <div>
                <button className='hover:bg-[#dc3545] transition duration-700 ease px-[45px] py-[15px] bg-[#0315ff] text-white tracking-[1.5px] text-[1em]'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
