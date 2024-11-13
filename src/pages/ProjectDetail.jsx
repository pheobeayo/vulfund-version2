import project1 from "../assets/project1.svg";
import { FaArrowUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import vector from '../assets/vector.svg';


const ProjectDetail = () => {


    return (
        <main className='w-screen'>
            <div className="bg-[#02080B]  bg-no-repeat w-[100%] md:w-[100%] lg:w-[100%]"
                style={{
                    backgroundImage: `url(${vector})`,
                    backgroundSize: "10%",
                    backgroundPosition: "left top",
                }}
            >

                <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-8 lg:px-40 md:px-40 h-[130vh]">
                    <div className="lg:w-[45%] md:w-[45%] w-[100%] h-full  mx-auto text-center lg:px-0 md:px-0 "
                    ><img src={project1} alt='' className="rounded-xl w-full" />
                        <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-serif text-left mt-2 my-4 text-white">
                            Bright Future Skill Academy
                        </h1>
                        <div className="border border-white p-4">
                            <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-serif text-left mt-2 my-4 text-white">
                                Bright Future Skill Academy’s organisation information.docx
                            </h1>
                        </div>
                        <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-serif text-left mt-2 my-4 text-white">
                            More Information
                        </h1>
                        <p className="lg:text-[15px] md:text-[15px] text-[12px] text-justify text-white ">Bright Future Skill Academy is a training and development institution focused on equipping underprivileged youth and adults with
                            practical skills in areas such as vocational training, digital literacy, and entrepreneurship. Their mission is to provide individuals from disadvantaged communities the tools and knowledge they need
                            to become self-sufficient and contribute meaningfully to society.

                        </p>
                        <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-serif text-left mt-2 my-4 text-white">
                            Request
                        </h1>
                        <p className="lg:text-[15px] md:text-[15px] text-[12px] text-justify text-white ">Bright Future Skill Academy is a training and development institution focused on equipping underprivileged youth and adults with
                            The academy is seeking funds to expand its current facilities and procure modern training equipment. This will enable them to train a larger number of participants in technical skills like tailoring, carpentry,
                            and digital marketing, empowering them to secure employment or start their own businesses.

                        </p>
                    </div>
                    <div className="lg:w-[50%] md:w-[50%] w-[90%]  bg-[#02080B] h-full">
                        <div className="bg-[#0A1F28] rounded-xl p-4  my-4">
                            <h1 className="px-4 lg:px-2 md:px-0 lg:text-[24px] md:text-[24px] text-[20px] font-serif text-white font-bold mt-4 my-10">
                                Poll Overview
                            </h1>
                            <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[500] my-6 flex justify-between flex-col lg:flex-row md:flex-row  w-[90%] mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#D3D0C7] dark:text-[#D3D0C7]">
                                Amount needed <span className="lg:base md:base text-sm font-[500] ">Amount Raised</span>
                            </h2>
                            <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[500] my-6 flex justify-between flex-col lg:flex-row md:flex-row  w-[90%] mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#5BDEF3] dark:text-[#5BDEF3]">
                                1,500 USDT <span className="lg:base md:base text-sm font-[500] "> 1,500 USDT</span>
                            </h2>
                            <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[400] my-6 flex justify-between flex-col lg:flex-row md:flex-row  mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#D3D0C7] dark:text-[#D3D0C7]">
                                This Project has been pushed for dao funding request
                            </h2>
                        </div>
                        <div className="bg-[#0A1F28] rounded-xl p-4 ">
                            <h1 className="lg:text-[24px] md:text-[24px] text-[20px] font-serif text-white font-bold mt-4 my-4">
                                Vote (3)
                            </h1>
                            <div className="flex gap-2 w-full">
                                <button className="bg-transparent w-[30%] py-2 text-white mb-2 rounded-xl border-white border flex gap-2 p-2 place-content-center" >
                                    {" "}
                                    <FaArrowUp /> Upvote(7,124)
                                </button>
                                <button className="bg-transparent w-[30%] py-2 text-white mb-2 rounded-xl border-white border flex gap-2 p-2 place-content-center" >
                                    {" "}
                                    <FaLongArrowAltDown />
                                    Downvote(618)
                                </button>
                            </div>
                            <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[400] my-6 flex justify-between flex-col lg:flex-row md:flex-row  mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#D3D0C7] dark:text-[#D3D0C7]">
                                Only donors who have the Dao membership right can vote
                            </h2>
                            <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[700] my-2 flex justify-between flex-col lg:flex-row md:flex-row  mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#5BDEF3] dark:text-[#5BDEF3]">
                                Voters (Dao Members)
                            </h2>
                            <ul className="text-white mx-4 font-[400] ">
                                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">0x35467f8ugedjufgfb</li>
                                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">0xU373yufjbeocrjfhb</li>
                                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">0x4rwghdfjevinkd</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetail;
