import { CgHomeAlt } from "react-icons/cg";
import { MdCreateNewFolder } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import { MdOutlineAnalytics } from "react-icons/md";
import { useDisconnect } from "@web3modal/ethers/react";

const Sidebar = () => {
const { disconnect } = useDisconnect();

  const activeStyle = {
    borderLeft: '1px solid #A3FFCE',
    borderRight: '1px solid #A3FFCE',
    width: '100%',
    padding: '20px'
  };

  return (
    <div className='bg-[#222222] w-[20%] text-[#FFFEFB] p-8 py-12 h-[100vh] hidden lg:flex md:flex flex-col'>
      <img src={logo} alt='logo' className="mb-20" />
      <NavLink to="/dashboard" className="text-[14px] text-[#FFFEFB] flex items-center py-4 mb-4 px-4 hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null} end><CgHomeAlt className="mr-4" />Treasury Donation</NavLink>
      <NavLink to="register" className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null}><MdCreateNewFolder className="mr-4" />Register</NavLink>
      <NavLink to="funding-requests" className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null}><GiReceiveMoney className="mr-4" /> Funding Requests</NavLink>
      <NavLink to="all-donations" className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null}><GiReceiveMoney className="mr-4" /> All Donations</NavLink>
      <NavLink to="analytics" className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" style={({ isActive }) => isActive ? activeStyle : null}><MdOutlineAnalytics  className="mr-4" /> Analytics</NavLink>
      <button className="text-[14px] text-[#FFFEFB]  flex items-center py-4 mb-4 px-6  hover:text-[#A3FFCE]" onClick={() => disconnect()}><CiLogout className="mr-4" /> Log out</button>

    </div>
  );
}

export default Sidebar;