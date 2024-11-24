import React from "react";
import { useState } from "react";
import { getVulfundContract } from "../constants/contract";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isSupportedChain } from "../connection";
import { Modal, Box } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 10,
  boxShadow: 24,
  border: "1px solid #42714262",
  backgroundColor: "#1E1D34",
  p: 4,
};

const DirectFund = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [donateAmount, setDonateAmount] = useState();

  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  async function handleDirectFund() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getVulfundContract(signer);

    try {
      const amountVal = ethers.parseUnits(donateAmount, 18);
      const transaction = await contract.directFunding(id, {
        value: amountVal,
      });
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Direct donation successful!", {
          position: "top-center",
        });
      }

      toast.error("Direct donation failed", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Direct donation failed!", {
        position: "top-center",
      });
    } finally {
      setDonateAmount("");
      handleClose();
    }
  }

  return (
    <div>
      <button
        className="bg-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] rounded-lg px-4 py-2 text-[#111012] mr-4  text-[18px] w-[100%]"
        onClick={handleOpen}
      >
        Donate
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
            value={id}
            className="text-white rounded-lg w-[100%] p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none hidden"
            readonly
          />
          <input
            type="text"
            value={donateAmount}
            placeholder="Amount"
            onChange={(e) => setDonateAmount(e.target.value)}
            className="text-white rounded-lg w-[100%] p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none"
          />
          <button
            className="bg-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] rounded-lg px-4 py-2 text-[#111012] mr-4 lg:text-[20px] md:text-[20px] text-[18px] w-[100%]"
            onClick={handleDirectFund}
          >
            Donate &rarr;
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default DirectFund;
