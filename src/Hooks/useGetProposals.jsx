import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { wssProvider } from "../constants/providers";
import { getVulfundContract } from "../constants/contract";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { formatUnits, ethers } from "ethers";

const useGetProposals = () => {
  const [allProposals, setAllProposals] = useState([]); 
  const [count, setCount] = useState(0);

  const fetchAllProposals = useCallback(async () => {
    try {
        const contract = getVulfundContract(readOnlyProvider);
        const res = await contract. getAllProposal();
        const converted = res?.map((item, index)=>{
            return{
              beneficiary: item[0],
              description: item[1],         
              proposalTopic: item[2],            
              donationtAddress: item[3],
              amount: item[4],           
              balance: item[5],      
              votes: item[6]  
          }      
        }) 
        setAllProposals(converted)
    } catch (error) {
        console.error(error);
    }
}, []);

const trackingProposals = useCallback(() => {
    setCount((prevValue) => prevValue + 1);
    fetchAllProposals();
}, [fetchAllProposals]);


useEffect(() => {
    fetchAllProposals();

    const filter = {
        address: import.meta.env.VITE_CONTRACT_ADDRESS,
        topics: [ethers.id("ProposalCreated((uint,address,string,address,uint)")],
    };

    wssProvider.getLogs({ ...filter, fromBlock: 17987662 }).then((events) => {
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

}, [fetchAllProposals, trackingProposals, count]);

return allProposals;
};

export default useGetProposals;
