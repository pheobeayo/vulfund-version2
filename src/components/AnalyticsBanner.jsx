import { RiRefund2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import vector from "../assets/vector.svg";
import { useState, useEffect } from "react";
import { getVulfundContract } from "../constants/contract";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { isSupportedChain } from "../connection";
import Analytics from '../pages/dashboard/Analytics'

const Banner = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [totalSignup, setTotalSignup] = useState("");
  const [totalDonation, setTotalDonation] = useState("");
  const [totalProposal, setTotalProposal] = useState("");
  const [totalDao, setTotalDao] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [requirement, setRequirement] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");

  async function handleFetch() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const contract = getVulfundContract(signer);

    try {
      const [dao, donation, proposal, signup, requirement, count, duration] =
        await Promise.all([
          contract.totalDaomembers(),
          contract.totalDonations(),
          contract.totalProposals(),
          contract.totalSignup(),
          contract.DaoMemberRequirement(),
          contract.cycleCount(),
          contract.voteDuration(),
        ]);

      setTotalDao(dao);
      setCount(count);
      setDuration(duration);
      setTotalDonation(donation);
      setTotalProposal(proposal);
      setTotalSignup(signup);
      setRequirement(requirement);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleFetch();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <section className=" bg-[#02080B]">
      <div
        className=" bg- lg:w-[100%] md:w-[100%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className=" text-white lg:text-[24px] md:text-[24px] text-[16px] font-montserrat font-[700] my-4">
          Summary
        </h1>
        <div className=" w-[100%] lg:w-[95%] md:w-[95%] px-4 flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
          <div className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
            <div className=" flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <RiRefund2Line className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat">
                  Total Counts Circle
                  <br /> {Number(count)}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <RiRefund2Line className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat">
                  {" "}
                  Vote Duration
                  <br /> {Number(duration) / 86400}Days
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <GiReceiveMoney className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat">
                  {" "}
                  Total Donations(YTD)
                  <br />
                  {Number(totalDonation) / 1e18} ETH
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[95%] md:w-[95%] px-4 flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
          <div className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <RiRefund2Line className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat">
                  {" "}
                  Total Counts of Signup
                  <br /> {Number(totalSignup)}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <GiReceiveMoney className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat">
                  {" "}
                  Dao Member Requirements
                  <br /> {Number(requirement) / 1e18} ETH
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <RiRefund2Line className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat">
                  {" "}
                  Total Dao Members
                  <br /> {Number(totalDao)}{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mx-4 lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
          <div className="flex lg:flex-row md:flex-row flex-col  gap-4 items-center">
            <div>
              <RiRefund2Line className="text-3xl" />
            </div>
            <div>
              <h1 className="text-left text-[12px] font-montserrat">
                {" "}
                Total Proposals
                <br /> {Number(totalProposal)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
