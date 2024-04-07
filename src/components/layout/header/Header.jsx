import logo from "../../../img/core-img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Divider, Dropdown, Space } from "antd";
import Drop from "../../drop down/Drop";
import { motion } from "framer-motion";
import { FaRegUser } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip, Input, Badge } from "antd";

const { Search } = Input;
export default function Example() {
  const items = [
    {
      key: "1",
      label: <Drop />,
    },
  ];
  /* box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15); */
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <header className=' header-shadow text-[1.4em] sticky  border-b-[0.8px] border-solid border-[#787878]'>
      <nav className='py-[20px] lg:px-6 px-2 '>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a href='#' className='flex items-center'>
            <img src={logo} className='' alt='Flowbite Logo' />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              hello
            </span>
          </a>
          <div className='flex gap-5 items-center lg:order-2 ml-[250px]'>
            <Tooltip className='cursor-pointer' title='Love Products'>
              <FaRegHeart />
            </Tooltip>
            <Tooltip className='cursor-pointer' title='User Profile'>
              <FaRegUser />
            </Tooltip>
            <Badge size='small' count={5} className='cursor-pointer'>
              <SlHandbag className='text-[1.5em]' />
            </Badge>
            {/*  <Tooltip
              color='geekblue'
              className='cursor-pointer'
              title='Login can buy products'>
              Login
            </Tooltip> */}
          </div>
          <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
            <ul className='text-[#787878] flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li className=' hover:text-black'>
                <a
                  href='#'
                  className='no-underline block py-2 pr-4 pl-3 lg:p-0'>
                  Home
                </a>
              </li>
              <li>
                <Dropdown
                  autoAdjustOverflow:false
                  width:max-content
                  placement='bottom'
                  menu={{
                    items,
                  }}>
                  <a className='cursor-pointer   hover:text-black block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent  lg:p-0'>
                    <Space>Shop</Space>
                  </a>
                </Dropdown>
              </li>

              <li className=' hover:text-black'>
                <a
                  href='#'
                  className='no-underline block py-2 pr-4 pl-3 lg:p-0'>
                  Blog
                </a>
              </li>
              <li className=' hover:text-black'>
                <a
                  href='#'
                  className='no-underline block py-2 pr-4 pl-3 lg:p-0'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
/* <motion.div
          className=''
          variants={{ x: 80 }}
          transition={{ duration: 0.5 }}
          initial='hidden'
          whileInView={"show"}>
          <Drop />,
        </motion.div> */
