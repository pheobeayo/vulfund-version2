import React from "react";
import { getVulfundContract } from "../constants/contract";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isSupportedChain } from "../connection";
import { FaArrowUp } from "react-icons/fa";
import { ErrorDecoder } from 'ethers-decode-error'
import abi from '../constants/abi.json'

const Vote = ({ id }) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const errorDecoder = ErrorDecoder.create([abi])

  async function handleVote() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getVulfundContract(signer);

    try {
      const transaction = await contract.vote(id);
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Vote successful!", {
          position: "top-center",
        });
      }

      toast.error("Vote failed", {
        position: "top-center",
      });
    } catch (err) {
      const decodedError = await errorDecoder.decode(err)
        toast.error(`Vote failed! - ${decodedError.reason}`, {
          position: "top-center",
        });
    }
  }

  return (
    <div>
      <input
        type="text"
        value={Number(id)}
        className="text-white rounded-lg w-[100%] p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none hidden"
        readonly
      />
      <button
        className="bg-transparent w-[100%] py-2 text-white mb-2 rounded-xl border-white border flex gap-2 p-2 place-content-center"
        onClick={handleVote}
      >
        <FaArrowUp /> Upvote
      </button>
    </div>
  );
};

export default Vote;
