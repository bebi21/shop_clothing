import { Divider } from "antd";
import React from "react";
import bg_6 from "../../img/bg-img/bg-6.jpg";
const Drop = () => {
  const data = [
    {
      title: "Women's Collection",
      item1: "Dresses",
      item2: "Bloud shirts",
      item3: "T-shirt",
      item4: "Romper",
    },
    {
      title: "Men's Collection",
      item1: "Dresses",
      item2: "Bloud shirts",
      item3: "T-shirt",
      item4: "Romper",
    },
    {
      title: "Kid's Collection",
      item1: "Dresses",
      item2: "Bloud shirts",
      item3: "T-shirt",
      item4: "Romper",
    },
  ];
  return (
    <>
      {" "}
      <div className=' grid grid-cols-4  gap-2 '>
        {data.map((item, index) => (
          <div key={index} className='border-r-[1px] border-solid '>
            <div className='px-3'>
              <div className=''>
                <p className='py-3'>{item.title}</p>
              </div>
              <Divider className='p-0 m-0 w-[100%]' />
              <div>
                <ul>
                  <li className='py-2'>
                    <a href=''>{item.item1}</a>
                  </li>
                  <li className='py-2'>
                    <a href=''>{item.item2}</a>
                  </li>
                  <li className='py-2'>
                    <a href=''>{item.item3}</a>
                  </li>
                  <li className='py-2'>
                    <a href=''>{item.item4}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className='border-r-[1px] border-solid '>
          <div className='px-3 '>
            <img src={bg_6} alt='' className='pt-4' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Drop;
