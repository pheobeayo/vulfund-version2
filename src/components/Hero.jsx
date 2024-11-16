import heroImage from "../assets/heroImage.svg";
import { Link } from "react-router-dom";
import vector from "../assets/vector.svg";
import { toast } from "react-toastify";

const Hero = () => {
    const handleConnect = () => {
        return toast.error('Connect your wallet to get started!', {
            position: "top-center",
        })
    }

  return (
    <main
      className="bg-[#02080B] bg-no-repeat"
      style={{
        backgroundImage: `url(${vector})`,
        backgroundSize: "50%",
        backgroundPosition: "left bottom",
      }}
    >
      <section className="bg-[#02080B] ">
        <div>
          <div className="lg:w-[95%] md:w-[95%] w-[100%] flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
            <div className="lg:w-[60%] md:w-[60%] w-[100%] p-16">
              <h1 className="text-white font-montserrat lg:text-[72px] md:text-[72px] text-[60px] font-[700]">
                Together, We
                <br /> Can Make a
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6AFEB0]  to-[#5CE3FB] ">
                  Lasting Impact
                </span>
              </h1>

              <div className="mt-6">
                <button
                  onClick={handleConnect}
                  className="bg-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] rounded-lg p-4 text-[#111012] font-montserrat mr-4 lg:text-[20px] md:text-[20px] text-[18px]"
                >
                  Donate Now
                </button>
                <button
                  onClick={handleConnect}
                  className="border border-[#5CE3FB] rounded-lg p-4 text-white font-montserrat bg-transparent lg:text-[20px] md:text-[20px] text-[18px]"
                >
                  Submit Funding Request
                </button>
              </div>
            </div>
            <div className="lg:w-[40%] md:w-[40%] w-[100%]">
              <img src={heroImage} alt="" className="w-[100%]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
