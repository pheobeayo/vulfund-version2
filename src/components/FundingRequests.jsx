import project1 from '../assets/project1.svg';
import project2 from '../assets/project2.svg';
import project3 from '../assets/project3.svg';
import { Link } from 'react-router-dom';


const FundingRequests = () => {
    return (
        <section className="bg-[#02080B]">
            <div className='lg:w-[95%] md:w-[95%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0'>
            <h2 className="px-4 lg:px-0 md:px-0 lg:text-[32px] md:text-[32px] text-[24px] font-[700] my-6 flex justify-between flex-col lg:flex-row md:flex-row  w-[90%] mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white ">Funding Requests <span className="lg:text-[24px] md:text-[24px] text-[18px] font-[400]"><Link to='/view-fundingrequest'>View More</Link></span></h2>
                <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap'>
                    <div className='lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg'>
                        <Link to={`/donor-donate`} className='text-white' >
                            <img src={project1} alt="" className='w-[100%] h-[237px] object-cover object-center rounded-lg' />
                            <h3 className='font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] '>Bright Future Skill Academy</h3>
                            <p className='text-white text-justify'>Funds to offer vocational training for disadvantaged youths. </p>
                            <p className='flex justify-between'>Amount needed <span>Amount Raised</span></p>
                            <p className='flex justify-between text-[#5BDEF3]'> 1,500 ETH <span> 1,500 ETH</span></p>
                            <button className='bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg'>View  details</button>
                        </Link>
                    </div>

                    <div className='lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white  bg-[#191F1C]/5 border rounded-xl shadow-lg'>
                        <Link to={`/donor-donate`} className='text-white' >
                            <img src={project2} alt="" className='w-[100%] h-[237px] object-cover object-center rounded-lg' />
                            <h3 className='font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] '>Grace Senior Citizen Home</h3>
                            <p className='text-white text-justify'> Financial support for medical supplies and monthly health checkups for elderly residents.</p>
                            <p className='flex justify-between'>Amount needed <span>Amount Raised</span></p>
                            <p className='flex justify-between text-[#5BDEF3]'> 1,500 ETH <span> 1,500 ETH</span></p>
                            <button className='bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg'>View  details</button>
                        </Link>
                    </div>
                    <div className='lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-white bg-[#191F1C]/5  rounded-xl  shadow-lg'>
                        <Link to={`/donor-donate`} className='text-white' >
                            <img src={project3} alt="" className='w-[100%] h-[237px] object-cover object-center rounded-lg' />
                            <h3 className='font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] '>Sunshine Orphanage</h3>
                            <p className='text-white text-justify'> Funding to provide school supplies and uniforms for 50 orphaned children.</p>
                            <p className='flex justify-between'>Amount needed <span>Amount Raised</span></p>
                            <p className='flex justify-between text-[#5BDEF3]'> 1,500 ETH <span> 1,500 ETH</span></p>
                            <button className='bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg'>View  details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FundingRequests;