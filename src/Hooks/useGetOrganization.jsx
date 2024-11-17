import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getVulfundContract } from "../constants/contract";
import { wssProvider } from "../constants/providers";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { ethers } from "ethers";

const useGetOrganization = () => {
    const [allOrganization, setAllOrganization] = useState([]);
    const [count, setCount] = useState(0);
    const { address } = useWeb3ModalAccount()

    const convertIpfsUrl = (url) => {
        if (url.startsWith("ipfs://")) {
            return url.replace("ipfs://", "https://ipfs.io/ipfs/");
        }
        return url;
    };

    const fetchAllOrganization = useCallback(async () => {
        try {
            const contract = getVulfundContract(readOnlyProvider);
            const res = await contract.orgProfiles(address);

            const converted = Array.from(res);
            setAllOrganization(converted)
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchAllOrganization();

    }, [fetchAllOrganization]);

    return allOrganization;
}

export default useGetOrganization;