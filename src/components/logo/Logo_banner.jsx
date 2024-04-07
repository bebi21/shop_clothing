import React, { useRef } from "react";
import logo1 from "../../img/core-img/brand1.png";
import logo2 from "../../img/core-img/brand2.png";
import logo3 from "../../img/core-img/brand3.png";
import logo4 from "../../img/core-img/brand4.png";
import logo5 from "../../img/core-img/brand5.png";
import logo6 from "../../img/core-img/brand6.png";
import Marquee from "react-fast-marquee";
function Logo_banner() {
  return (
    <Marquee autoFill={true} pauseOnHover={true} direction='right'>
      <div
        data-aos='fade-right'
        data-aos-easing='linear'
        data-aos-duration='1500'
        className='w-full mt-[40px] py-[80px] bg-[#f5f7f9]'>
        <div className='flex justify-evenly items-center h-[]'>
          <img src={logo1} alt='logo' className=' align-middle px-[40px] ' />
          <img src={logo2} alt='logo' className=' px-[40px] align-middle' />
          <img src={logo3} alt='logo' className=' px-[40px] align-middle' />
          <img src={logo4} alt='logo' className=' px-[40px] align-middle' />
          <img src={logo5} alt='logo' className=' px-[40px] align-middle' />
          <img src={logo6} alt='logo' className=' px-[40px] align-middle' />
        </div>
      </div>
    </Marquee>
  );
}

export default Logo_banner;
