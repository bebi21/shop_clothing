import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className='banner-home_page'>
      <div className='h-[100%] flex justify-start items-center w-[100%]'>
        <div className='pl-[15%] font-bold'>
          <div className='py-2'>
            <p className='text-[#6c757d] text-[1.5rem] pl-[5px]'>asso</p>
            <h1 className='text-[5rem]'>New Collection</h1>
          </div>
          <div>
            <button className='hover:bg-[#dc3545] transition duration-700 ease px-[40px] py-[20px] bg-[#0315ff] text-white tracking-[1.5px] text-[0.8em]'>
              VIEW COLLECTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
