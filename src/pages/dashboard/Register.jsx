import Banner from "../../components/Banner";


const Register = () => {


    return (
        <main className="bg-[#02080B]">
            <Banner/>
            <div className="grid place-items-center bg-[#02080B]">
                <div className="w-1/2 p-8 rounded-lg text-[#110A03] flex flex-col items-center bg-[#02080B] lg:w-[50%] md:w-[50%]  mx-auto">
                    <h1 className="text-[30px] lg-[36px] md-[36px] font-montserrat text-white font-bold mt-16  my-10">
                    Register to get started
                    </h1>
                    <label className="block mt-2 mb-2 text-base font-bold text-white dark:text-white text-left">
                    Organisation Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter the organisation name"
                        className="bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#5CE3FB] focus:border-[#5CE3FB] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"

                    />
                    <label className="block mt-2 mb-2 text-base font-bold text-white dark:text-white text-left">
                    Organisation Logo
                    </label>
                    <input
                        type="file"
                        placeholder="Organisation Logo"
                        className="bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#5CE3FB] focus:border-[#5CE3FB] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"

                    />
                    <label className="block mt-2 mb-2 text-base font-bold text-white dark:text-white text-left">
                    Organisation Profile Document
                    </label>
                    <input
                        type="file"
                        placeholder="Enter your wallet address"
                        className="bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#5CE3FB] focus:border-[#5CE3FB] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"

                    />
                     <ul className="text-white ">
                     Organisation profile document must contain: 
                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">Name</li>
                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">Location (address, city, state, country)</li>
                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">Contact details (phone number, email address)</li>
                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">Year of establishment</li>
                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">Beneficiaries information</li>
                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">Brief description of services provided and the mission</li>
            </ul>
                    

                    <button
                        className="bg-gradient-to-r from-[#6AFEB0]  to-[#5CE3FB]  hover:bg-[#5CE3FB] text-[#111012] py-2 px-4 rounded lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4">
                        Submit
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Register;