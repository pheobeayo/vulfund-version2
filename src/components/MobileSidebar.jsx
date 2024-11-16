import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { CgHomeAlt } from "react-icons/cg";
import { MdCreateNewFolder } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdOutlineAnalytics } from "react-icons/md";
import logo from '../assets/logo.svg'

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);


  const activeStyle = {
    borderLeft: '1px solid #5CE3FB',
    borderRight: '1px solid #5CE3FB',
    width: '100%',
    padding: '20px'
  };

  return (
    <header className="lg:hidden md:hidden flex justify-between my-4 relative">
      <img src={logo} alt="" className="w-[150px] my-4" />
      <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" direction="right" />
      {isOpen && (
        <div className="bg-[#222222] text-[#FFFEFB] p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
          <NavLink to="/dashboard" className="text-[14px] text-[#FFFEFB] flex items-center py-4 mb-4 px-4 hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null} end><CgHomeAlt className="mr-4" />Treasury Donation</NavLink>
          <NavLink to="register" className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null}><MdCreateNewFolder className="mr-4" />Register</NavLink>
          <NavLink to="funding-requests" className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null}><GiReceiveMoney className="mr-4" /> Funding Requests</NavLink>
          <NavLink to="all-donations" className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null}><GiReceiveMoney className="mr-4" /> All Donations</NavLink>
          <NavLink to="analytics" className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null}><MdOutlineAnalytics  className="mr-4" /> Analytics</NavLink>
          <button className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" ><CiLogout className="mr-4" /> Log out</button>
        </div>
      )}
    </header>
  );
};

export default MobileSidebar;
