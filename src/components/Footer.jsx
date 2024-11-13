import logo from "../assets/logo.svg"
import { AiOutlineDiscord } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-[#0A1F28] bg-no-repeat py-8 px-2"
    >
      <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto flex flex-col text-white">
        <div className="lg:w-[40%] md:w-[40%] w-[100%] ml-auto my-6 flex flex-col lg:items-end lg:text-right md:items-end md:text-right text-center items-center">
          <img src={logo} alt="" className="w-[295px] h-[60px]  mb-4" />

          <p className="lg:w-[80%] md:w-[80%] w-[100%]">Decentralised Giving, Global Impact</p>
        </div>
        <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row text-center lg:text-left md:text-left">
          <p className="mb-4">&copy; 2024 Vulfund</p>
          <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row">
            <p className="lg:mr-8 md:mr-8 mb-4">Product</p>
            <p className="lg:mr-8 md:mr-8 mb-4">Company</p>
            <p className="mb-4">Resources</p>

          </div>
          <div className="flex items-center mb-4">
            <FaXTwitter className="mr-2 text-xl" />
            <AiOutlineDiscord className="mr-2 text-xl" />
            <MdMailOutline className="text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
