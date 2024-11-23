import { useState, useEffect } from "react";
import vector from "../../assets/vector.svg";
import Banner from "../../components/Banner";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { TbFoldersOff } from "react-icons/tb";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import useGetOrganization from "../../Hooks/useGetOrganization";
import { formatUnits } from "ethers";
import useGetUserProposal from "../../Hooks/useGetUserProposal";
import { Link } from "react-router-dom";

const APIURL = "https://api.studio.thegraph.com/query/72144/vulfund/v0.0.1";

const proposalQuery = `
query getAllProposal {
   proposalCreateds {
    id
    proposalId
    beneficiary
    description
    recipientAddrss
    amount
    blockTimestamp
  }
}
`;

const FundingRequests = () => {
  const [value, setValue] = useState("one");
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userProposals = useGetUserProposal();
  const allOrganization = useGetOrganization();

  const convertIpfsUrl = (url) => {
    if (url && url.startsWith("ipfs://")) {
      return url.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
    return url || "";
  };

  const imageUrl = convertIpfsUrl(allOrganization[1]);

  const decodeHexString = (hexString) => {
    if (!hexString) return "";
    try {
      return Buffer.from(hexString.replace(/^0x/, ""), "hex").toString("utf-8");
    } catch (err) {
      console.error("Error decoding string: ", err);
      return "Invalid description";
    }
  };

  useEffect(() => {
    const client = new ApolloClient({
      uri: APIURL,
      cache: new InMemoryCache(),
    });

    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: gql(proposalQuery),
        });

        const proposalsWithDecodedDescriptions = data.proposalCreateds.map(
          (proposal) => ({
            ...proposal,
            description: decodeHexString(proposal.description),
          })
        );

        setProposals(proposalsWithDecodedDescriptions);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className="bg-[#02080B] ">
      <Banner />
      <section
        className="bg-[#02080B]  bg-no-repeat"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "10%",
          backgroundPosition: "left top",
        }}
      >
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            borderBottom: "1",
            borderColor: "#0A5B68",
          }}
        >
          <TabContext value={value}>
            <div className="px-4  mt-4 flex gap-4 font-bold text-white w-[90%] flex-col lg:flex-row md:flex-row">
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="#0A5B68"
              >
                <Tab label="All Funding Requests" value="one" />
                <Tab label="Submitted Requests" value="two" />
              </TabList>
            </div>

            <TabPanel value="one">
              <div className="lg:w-[100%] md:w-[100%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
                <h2 className="px-4 lg:px-0 md:px-0 lg:text-[28px] md:text-[28px] text-[20px] mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white">
                  All Funding Requests{" "}
                </h2>
                <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
                  {userProposals.length > 0 ? (
                    userProposals.map((item, index) => (
                      <div
                        key={index}
                        className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg"
                      >
                        <img
                          src={imageUrl}
                          alt="projectphoto"
                          className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                        />
                        <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] text-white ">
                          {allOrganization[2]}
                        </h3>
                        <p className="text-white text-justify ">
                          {item.description.slice(0, 40)}...
                        </p>
                        <p className="flex justify-between text-white">
                          Amount needed <span>Balance left</span>
                        </p>
                        <p className="flex justify-between text-[#5BDEF3]">
                          {formatUnits(item.amount)} ETH
                          <span>{Number(item.balance)}ETH</span>
                        </p>
                        <Link
                          to={`/dashboard/funding-requests/${item.proposalid}`}
                        >
                          <button className="bg-transparent my-4 border w-full py-2 px-4 border-white text-white rounded-lg">
                            View details
                          </button>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p className="text-white text-center justify-center flex items-center w-[100%]">
                      <TbFoldersOff className="mr-4 text-4xl" /> No projects
                      available.
                    </p>
                  )}
                </div>
              </div>
            </TabPanel>
            <TabPanel value="two"></TabPanel>
          </TabContext>
        </Box>
      </section>
    </main>
  );
};

export default FundingRequests;
