import React, { useMemo, useState } from "react";
import { Card, Rate } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
const { Meta } = Card;
import product1 from "../../img/product-img/product-1.jpg";
import product2 from "../../img/product-img/product-2.jpg";
import product3 from "../../img/product-img/product-3.jpg";
import product4 from "../../img/product-img/product-4.jpg";
import product5 from "../../img/product-img/product-5.jpg";
import product6 from "../../img/product-img/product-6.jpg";
import product7 from "../../img/product-img/product-7.jpg";
import product8 from "../../img/product-img/product-8.jpg";

function Cart_home({ item }) {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [image, setImage] = useState(item.img1);
  const [check, setCheck] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
    setHover1(true);
    setImage(item.img2); // Đổi sang ảnh 2
  };

  // Xử lý khi mouse leave
  const handleMouseLeave = () => {
    if (check) {
      setHover(false);
      setImage(item.img1);
      return;
    }
    setHover(false);
    setHover1(false);
    setImage(item.img1); // Đổi về ảnh 1
  };

  // Styles cho các thành phần khi hover
  const hoverStyles = {
    rate: {
      opacity: hover1 ? "1" : "0",
      transition: "opacity 0.7s ease",
    },
    addToCartButton: {
      opacity: hover ? "1" : "0",
      transition: "opacity 0.7s ease",
      // Các styles khác cho nút add to cart
    },
  };
  const handleClick = () => {
    setCheck(!check);
  };

  return (
    <div>
      <Card
        style={{
          width: 255,
          boxShadow: "none",
          outline: "none",
          border: "none",
        }}
        cover={
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative'>
            <div>
              <img alt='example' src={image} />
            </div>
            <div>
              {" "}
              <Rate
                className='text-red-500 cursor-pointer absolute top-[10px] right-[10px] w-[45px] h-[25px] flex justify-center items-center p-[6px] border-solid border-1 bg-white shadow-lg  '
                style={hoverStyles.rate}
                character={<HeartFilled />}
                count={1}
                onChange={handleClick}
              />
            </div>
            <div
              style={hoverStyles.addToCartButton}
              className='absolute bottom-[10px] mx-10 '>
              <button className='hover:bg-[#dc3545] uppercase transition duration-700 ease px-[40px] py-[10px] bg-[#0315ff] text-white tracking-[1.5px] text-[0.8em]'>
                add to cart
              </button>
            </div>
          </div>
        }>
        <Meta description='Topshop' />
        <Meta title='One Shoulder Glitter Midi Dress' />
        <Meta title='$ 80.00' />
      </Card>
    </div>
  );
}

export default Cart_home;
