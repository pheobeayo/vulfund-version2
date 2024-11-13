
import decentralized from "../assets/decentralized.svg";
import community from "../assets/community.svg";
import global from '../assets/global.svg';
import vector from '../assets/vector.svg'

const Hero = () => {
    return (
        <main className="bg-[#191F1C]">
            <section className="bg-[#191F1C]">
                <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto border border-transparent shadow-xl rounded-2xl py-8 p-2 bg-[#131419]">
                    <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                        <div className="lg:w-[70%] md:w-[70%] w-[90%] p-2"> <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#6AFEB0]  to-[#5CE3FB]  lg:text-[20px] md:text-[20px] text-[16px] font-[700]  my-12 font-montserrat text-center lg:text-left md:text-left px-4">Why choose Vulfund</h3>
                            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700] text-white my-12 font-montserrat text-center lg:text-left md:text-left px-4">
                                Decentralized Giving,
                                <br />  Global Impact
                            </h2>
                        </div>
                        <div className="lg:w-[30%] md:w-[30%] w-[10%]">
                            <img src={vector} alt="" className="w-[45%]" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex-row justify-between">
                        <div className="py-6 lg:w-[30%] md:w-[30%] w-[90%] mx-auto mb-4">
                            <div className="grid place-content-start ">
                                <img src={decentralized} alt='' />
                            </div>
                            <h3 className="lg:text-[20px] md:text-[20px] text-[18px] font-[600] font-montserrat mb-4 text-white text-left">
                                Decentralized & Transparent
                            </h3>
                            <p className="text-white text-justify lg:text-[18px] md:text-[18px] text-[16px]">
                                Vulfund uses blockchain to ensure every donation is traceable and goes directly to the registered institutions without intermediaries.
                            </p>
                        </div>
                        <div className="py-6 lg:w-[30%] md:w-[30%] w-[90%] mx-auto mb-4">
                            <div className="grid place-items-start">
                                <img src={community} alt='' />
                            </div>
                            <h3 className="lg:text-[20px] md:text-[20px] text-[18px] font-[600] font-montserrat mb-4 text-white text-start">
                                Community-Driven Decisions
                            </h3>
                            <p className="text-white text-justify lg:text-[18px] md:text-[18px] text-[16px]">
                                As a DAO, donors collectively decide how funds are distributed through transparent voting processes.
                            </p>
                        </div>
                        <div className="py-6  lg:w-[30%] md:w-[30%] w-[90%] mx-auto mb-4">
                            <div className="grid place-items-start">
                                <img src={global} alt='' />
                            </div>
                            <h3 className="lg:text-[20px] md:text-[20px] text-[18px] font-[600] font-montserrat mb-4 text-white text-start">
                                Global Reach, Local Impact
                            </h3>
                            <p className="text-white text-justify lg:text-[18px] md:text-[18px] text-[16px]">
                                Support vulnerable communities in Africa, ensuring they receive essential resources like food, healthcare, education, and skill development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;
