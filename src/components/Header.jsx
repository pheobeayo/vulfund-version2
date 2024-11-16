import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { toast } from "react-toastify";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleConnect = () => {
    return toast.error("Connect your wallet", {
      position: "top-center",
    });
  };

  return (
    <header className="py-8 bg-[#02080B]">
      <div className="w-[100vw] mx-auto lg:flex md:flex justify-between hidden font-montserrat">
        <img src={logo} alt="" className="w-[235px] h-[43px]" />
        <nav>
          <NavLink
            to="/"
            className="text-white hover:text-[#5CE3FB] hover:font-[700] mr-10 text-[18px]"
          >
            Home
          </NavLink>

          <button
            onClick={handleConnect}
            className="text-white hover:text-[#5CE3FB] hover:font-[700] mr-10 text-[18px]"
          >
            View Funding Requests
          </button>

          <button
            onClick={handleConnect}
            className="text-white hover:text-[#5CE3FB] hover:font-[700] mr-10 text-[18px]"
          >
            Register for Funding
          </button>
        </nav>
        <div className="mr-12 lg:mr-8 md:mr-8">
          <w3m-button />
        </div>
      </div>
      <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative">
        <img src={logo} alt="" className="w-[185px] h-[43px]" />
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#110A03"
          direction="right"
        />
        {isOpen && (
          <nav className="flex flex-col bg-gradient-to-r from-[#110A03] via-[#110A03] to-[#DA8450] p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
            <NavLink
              to="/"
              className="text-white hover:text-[#5CE3FB] hover:font-[700] mb-6 text-[18px]"
            >
              Home
            </NavLink>

            <button
              onClick={handleConnect}
              className="text-white hover:text-[#5CE3FB] hover:font-[700] mr-10 text-[18px]"
            >
              View Funding Requests
            </button>

            <button
              onClick={handleConnect}
              className="text-white hover:text-[#5CE3FB] hover:font-[700] mr-10 text-[18px]"
            >
              Register for Funding
            </button>

            <div className="mt-6">
              <w3m-button />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
