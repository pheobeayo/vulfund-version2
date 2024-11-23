import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { wssProvider } from "../constants/providers";
import { getVulfundContract } from "../constants/contract";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { formatUnits, ethers } from "ethers";

const useGetUserProposal = () => {
  const [userProposals, setUserProposals] = useState([]); 
  const [count, setCount] = useState(0);
  const { address } = useWeb3ModalAccount()

  const fetchAllUserProposals = useCallback(async () => {
    try {
        const contract = getVulfundContract(readOnlyProvider);
        const res = await contract. getUserProposals(address);
        const converted = res?.map((item, index)=>{
            return{
              beneficiary: item[0],
              description: item[1],         
              proposalTopic: item[2],            
              donationtAddress: item[3],
              proposalid: item[4],
              amount: item[5],           
              balance: item[6],      
              votes: item[7]  
          }      
        }) 
        setUserProposals(converted)
    } catch (error) {
        console.error(error);
    }
}, []);

const trackingProposals = useCallback(() => {
    setCount((prevValue) => prevValue + 1);
    fetchAllUserProposals();
}, [fetchAllUserProposals]);


useEffect(() => {
    fetchAllUserProposals();

    const filter = {
        address: import.meta.env.VITE_CONTRACT_ADDRESS,
        topics: [ethers.id("ProposalCreated((uint,address,string,address,uint)")],
    };

    wssProvider.getLogs({ ...filter, fromBlock: 18185090 }).then((events) => {
        setCount(events.length + 1);
    });

    const provider = new ethers.WebSocketProvider(
        import.meta.env.VITE_WSS_ALCHEMY_RPC
    );
    provider.on(filter, trackingProposals);

    return () => {
        // Perform cleanup
        provider.off(filter, trackingProposals);
    };

}, [fetchAllUserProposals, trackingProposals, count]);

return userProposals;
};

export default useGetUserProposal;
