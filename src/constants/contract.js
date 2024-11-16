import { ethers } from "ethers";
import abi from './abi.json'
import nftAbi from './nftAbi.json'

export const getVulfundContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        abi,
        providerOrSigner
    );

export const getVulfundNFT = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_VULFUNDNFT_ADDRESS,
        nftAbi,
        providerOrSigner
    );