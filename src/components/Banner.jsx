import React, { useState } from "react";
import { getVulfundContract } from "../constants/contract";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers, parseUnits } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isSupportedChain } from "../connection";
import view from "../assets/view.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ErrorDecoder } from 'ethers-decode-error'
import abi from '../constants/abi.json'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 10,
  boxShadow: 24,
  border: "1px solid #110A03",
  backgroundColor: "#02080B",
  p: 4,
};

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [opensubmit, setOpenSubmit] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenSubmit = () => setOpenSubmit(true);
  const handleSubmitClose = () => setOpenSubmit(false);
  const [donateAmount, setDonateAmount] = useState();
  const errorDecoder = ErrorDecoder.create([abi])
  const [userAddress, setUserAddress] = useState(null);
  const [requestTopic, setRequestTopic] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  async function handleDonate() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getVulfundContract(signer);

    try {
      const amountVal = ethers.parseEther(donateAmount);
      const transaction = await contract.donate({
        value: amountVal,
      });
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Donation successful!", {
          position: "top-center",
        });
      }

      toast.error("Donation failed", {
        position: "top-center",
      });
    } catch (err) {
      const decodedError = await errorDecoder.decode(err)
      console.error(err);
      toast.error(`Donation failed! - ${decodedError.reason}`, {
        position: "top-center",
      });
    } finally {
      setDonateAmount("");
      setOpen(false)
    }
  }

  async function handleRequest() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const contract = getVulfundContract(signer);

    try {
      const amountVal = ethers.parseUnits(amount, 18);

      const transaction = await contract.createProposal(
        requestTopic,
        description,
        userAddress,
        amountVal
      );
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Request Creation Successful!", {
          position: "top-center",
        });
      }

      toast.error("Request Creation Failed", {
        position: "top-center",
      });
    }catch (err) {
        const decodedError = await errorDecoder.decode(err)
        toast.error(`Request creation failed! - ${decodedError.reason}`, {
          position: "top-center",
        });
    } finally {
      setAmount("")
      setDescription("")
      setRequestTopic("")
      setUserAddress("")
      setOpenSubmit(false)
    }
  }

  return (
    <section className=" bg-[#02080B]">
      <div
        className="lg:w-[100%] md:w-[100%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${view})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className=" text-white lg:text-[38px] md:text-[38px] text-[30px] font-montserrat font-[700] my-4">
          Together, We Can Make
          <br />a Lasting Impact
        </h1>

        <div className="mt-6">
          <button
            className="bg-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] rounded-lg p-4 text-[#111012] mr-4 lg:text-[20px] md:text-[20px] text-[18px]"
            onClick={handleOpen}
          >
            Donate Now
          </button>
          <button
            className="bg-transparent rounded-lg p-4 text-white border border-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] mr-4 lg:text-[20px] md:text-[20px] text-[18px]"
            onClick={handleOpenSubmit}
          >
            Request for Funding
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <input
                type="text"
                value={donateAmount}
                onChange={(e) => setDonateAmount(e.target.value)}
                placeholder="Enter amount"
                className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none"
              />
              <button className="bg-gradient-to-r from-[#6AFEB0]  to-[#5CE3FB]  hover:bg-[#5CE3FB] text-[#111012] py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4" onClick={handleDonate}>
                {" "}
                Donate
              </button>
              <p className="lg:text-[15px] md:text-[15px] text-[12px]  text-[#C4D3D3] ">
                Minimum amount of donation that can be accepted is $5
              </p>
              <div className="flex gap-4 font-bold text-white p-2">
                <button className="bg-transparent hover:bg-transparent border-[#C4D3D3] border text-[#C4D3D3] font-bold py-2 px-4 rounded">
                  $5
                </button>
                <button className="bg-transparent hover:bg-transparent text-[#C4D3D3] border-[#C4D3D3] border font-bold py-2 px-4 rounded">
                  $20
                </button>
                <button className="bg-transparent hover:bg-transparent text-[#C4D3D3] border-[#C4D3D3] border font-bold py-2 px-4 rounded">
                  $100
                </button>
                <button className="bg-transparent hover:bg-transparent text-[#C4D3D3] border-[#C4D3D3] border font-bold py-2 px-4 rounded">
                  $150
                </button>
              </div>
              <p className=" text-[#2AD7F2] lg:text-[15px] md:text-[15px] text-[12px]  mt-2 text-justify ">
                Please note that you will receive a unique NFT for donations of
                $100 or more, granting DAO membership rights.
              </p>
            </Box>
          </Modal>
          <Modal
            open={opensubmit}
            onClose={handleSubmitClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <input
                type="text"
                value={requestTopic}
                onChange={(e) => setRequestTopic(e.target.value)}
                placeholder="Enter request title"
                className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none "
              />
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter the amount of funding required"
                className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none "
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the funding request"
                className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none"
              />
              <input
                type="text"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                placeholder="Enter your wallet address"
                className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none"
              />
              <button className="bg-gradient-to-r from-[#6AFEB0]  to-[#5CE3FB]  hover:bg-[#5CE3FB] text-[#111012] py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4" onClick={handleRequest}>
                {" "}
                Submit
              </button>
            </Box>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Banner;
