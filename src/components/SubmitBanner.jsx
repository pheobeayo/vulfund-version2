import { useState } from 'react';
import view from '../assets/view.svg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 10,
    boxShadow: 24,
    border: '1px solid #110A03',
    backgroundColor: '#02080B',
    p: 4,
};

const SubmitBanner = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <section className=" bg-[#02080B]">

            <div className="lg:w-[100%] md:w-[100%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover bg-center"
                style={{
                    backgroundImage: `url(${view})`,
                    backgroundSize: "cover",

                }}>
                <h1 className=" text-white lg:text-[38px] md:text-[38px] text-[30px] font-montserrat font-[700] my-4">
                    Together, We Can Make
                    <br />a Lasting Impact
                </h1>

                <div className="mt-6">
                    <button className="bg-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] rounded-lg p-4 text-[#111012] mr-4 lg:text-[20px] md:text-[20px] text-[18px]" onClick={handleOpen}>
                        Request for Funding
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <input type="text" placeholder='Enter request title' className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none " />
                            <input type="text" placeholder='Enter the amount of funding required' className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none " />
                            <input type="text" placeholder='Describe the funding request' className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none" />
                            <input type="text" placeholder='Enter your wallet address' className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none" />
                            <button className="bg-gradient-to-r from-[#6AFEB0]  to-[#5CE3FB]  hover:bg-[#5CE3FB] text-[#111012] py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4" > Submit</button>
                        </Box>
                    </Modal>
                </div>
            </div>

        </section>
    );
};

export default SubmitBanner;

