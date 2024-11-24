import vector from "../../assets/vector.svg";
import Banner from "../../components/Banner";
import { GiReceiveMoney } from "react-icons/gi";

const AllDonations = () => {
    // const { chainId, address } = useWeb3ModalAccount();
    // const { walletProvider } = useWeb3ModalProvider();
    // const [donateHistory, setDonateHistory] = useState();
    
//   async function handleUserDonation() {
//     if (!isSupportedChain(chainId)) return console.error("Wrong network");
//     const readWriteProvider = getProvider(walletProvider);
//     const signer = await readWriteProvider.getSigner();

//     const contract = getVulfundContract(signer);

//     try {
//       const res = await contract.getDonator(address);
//       setDonateHistory(res);
//     } catch (error) {
//       console.log(error)
//     } 
//   }

//   useEffect(() => {
//     handleUserDonation();
//   }, []);


  return (
    <main className="bg-[#02080B]">
      <Banner />
      <section
        className="bg-[#02080B] bg-no-repeat "
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "10%",
          backgroundPosition: "left top",
        }}
      >
        <div className="lg:w-[95%] md:w-[95%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
          <h2 className="px-4 lg:px-0 md:px-0 lg:text-[28px] md:text-[28px] text-[20px] font-[700]  mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white ">
            All Donations{" "}
          </h2>
        </div>
      </section>
      <section className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
    <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
        <div>
          <GiReceiveMoney className="text-3xl" />
        </div>
          <h1 className="text-left text-[12px] font-montserrat">
            {" "}
            Total Donations(YTD)
            <br />
            0.002 ETH
          </h1>
      </div>
      </section>
    </main>
  );
};

export default AllDonations;
