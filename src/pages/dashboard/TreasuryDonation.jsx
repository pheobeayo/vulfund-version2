import { useState } from "react";
import { Link } from "react-router-dom";
import project1 from "../../assets/project1.svg";
import project2 from "../../assets/project2.svg";
import project3 from "../../assets/project3.svg";
import vector from "../../assets/vector.svg";
import Banner from "../../components/Banner";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import useGetProposals from "../../Hooks/useGetProposals";
import { formatUnits } from "ethers";
import useGetAllOrganization from "../../Hooks/useGetAllOrganization";

const TreasuryDonation = () => {
  const [value, setValue] = useState("one");
  const allProposals = useGetProposals();
  const organization = useGetAllOrganization();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const convertIpfsUrl = (url) => {
    if (url && url.startsWith("ipfs://")) {
      return url.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
    return url || "";
  };

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
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            borderBottom: "1",
            borderColor: "#0A5B68",
          }}
        >
          <TabContext value={value}>
            <div className="px-4 mt-4 flex lg:flex-row md:flex-row flex-col justify-between font-bold text-white  w-[100%] ">
              <div className="flex gap-2">
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  textColor="#0A5B68"
                  hover="#0A5B68"
                >
                  <Tab label="All Funding Requests" value="one" />
                  <Tab label="All Voted Requests" value="two" />
                  <Tab label="All Funded Projects" value="three" />
                </TabList>
              </div>
              <div>
                <h1 className="lg:px-0 md:px-0 lg:text-[20px] md:text-[20px] text-[16px] font-[700] mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white">
                  10hrs 22mins left to vote
                </h1>
              </div>
            </div>
            <TabPanel value="one">
              <div className="lg:w-[100%] md:w-[100%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
                <h2 className="px-4 lg:px-0 md:px-0 lg:text-[28px] md:text-[28px] text-[20px] font-[700]  mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white flex justify-between">
                  Top 5 leading Requests{" "}
                  <span className="text-[#A3FFCE] text-[15px]">
                    {" "}
                    View all top 5 requests{" "}
                  </span>{" "}
                </h2>
                <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
                    {allProposals.length > 0 ? (
                      allProposals.map((item) => (
                        <div key={item.proposalid} className="lg:w-[32%] md:w-[32%] w-[100%] p-4 border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
                          {organization.map(
                            (info) =>
                              item.beneficiary === info[0] && (
                                  <img
                                    src={convertIpfsUrl(info[1])}
                                    alt="projectphoto"
                                    className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                                  />
                              )
                          )}
                          <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] text-white">
                            {item.proposalTopic}
                          </h3>
                          <p className="text-white text-justify truncate">
                            {item.description.slice(0, 40)}...
                          </p>
                          <p className="flex justify-between text-white">
                            Amount needed <span>Balance left</span>
                          </p>
                          <p className="flex justify-between text-[#5BDEF3]">
                            {formatUnits(item.amount)} ETH
                            <span>{formatUnits(item.balance)} ETH</span>
                          </p>
                          <Link to={`funding-requests/${item.proposalid}`}>
                            <button className="bg-transparent my-4 border w-full py-2 px-4 border-white text-white rounded-lg">
                              View details
                            </button>
                          </Link>
                        </div>
                      ))
                    ) : (
                      <p>No projects available.</p>
                    )}
                  </div>
                </div>
            </TabPanel>
            <TabPanel value="two">
              <div className="lg:w-[100%] md:w-[100%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
                <h2 className="px-4 lg:px-0 md:px-0 lg:text-[28px] md:text-[28px] text-[20px] font-[700]  mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white flex justify-between">
                  All Voted Projects{" "}
                  <span className="text-[#A3FFCE] text-[15px]">
                    {" "}
                    View all top 5 requests{" "}
                  </span>{" "}
                </h2>
                <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
                  <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
                    <Link to="" className="text-white">
                      <img
                        src={project1}
                        alt=""
                        className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                      />
                      <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] ">
                        Bright Future Skill Academy
                      </h3>
                      <p className="text-white text-justify">
                        Funds to offer vocational training for disadvantaged
                        youths.{" "}
                      </p>
                      <p className="flex justify-between">
                        Amount needed <span>Amount Raised</span>
                      </p>
                      <p className="flex justify-between text-[#5BDEF3]">
                        {" "}
                        1,500 USDT <span> 1,500 USDT</span>
                      </p>
                      <button className="bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg">
                        View details
                      </button>
                    </Link>
                  </div>
                  <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white  bg-[#191F1C]/5 border rounded-xl shadow-lg">
                    <Link to="" className="text-white">
                      <img
                        src={project2}
                        alt=""
                        className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                      />
                      <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] ">
                        Grace Senior Citizen Home
                      </h3>
                      <p className="text-white text-justify">
                        {" "}
                        Financial support for medical supplies and monthly
                        health checkups for elderly residents.
                      </p>
                      <p className="flex justify-between">
                        Amount needed <span>Amount Raised</span>
                      </p>
                      <p className="flex justify-between text-[#5BDEF3]">
                        {" "}
                        1,500 USDT <span> 1,500 USDT</span>
                      </p>
                      <button className="bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg">
                        View details
                      </button>
                    </Link>
                  </div>
                  <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-white bg-[#191F1C]/5  rounded-xl  shadow-lg">
                    <Link to="" className="text-white">
                      <img
                        src={project3}
                        alt=""
                        className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                      />
                      <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] ">
                        Sunshine Orphanage
                      </h3>
                      <p className="text-white text-justify">
                        {" "}
                        Funding to provide school supplies and uniforms for 50
                        orphaned children.
                      </p>
                      <p className="flex justify-between">
                        Amount needed <span>Amount Raised</span>
                      </p>
                      <p className="flex justify-between text-[#5BDEF3]">
                        {" "}
                        1,500 USDT <span> 1,500 USDT</span>
                      </p>
                      <button className="bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg">
                        View details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="three">
              <div className="lg:w-[100%] md:w-[100%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
                <h2 className="px-4 lg:px-0 md:px-0 lg:text-[28px] md:text-[28px] text-[20px] font-[700]  mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white flex justify-between">
                  All funded Projects{" "}
                  <span className="text-[#A3FFCE] text-[15px]">
                    {" "}
                    View all top 5 requests{" "}
                  </span>{" "}
                </h2>
                <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
                  <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
                    <Link to="" className="text-white">
                      <img
                        src={project1}
                        alt=""
                        className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                      />
                      <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] ">
                        Bright Future Skill Academy
                      </h3>
                      <p className="text-white text-justify">
                        Funds to offer vocational training for disadvantaged
                        youths.{" "}
                      </p>
                      <p className="flex justify-between">
                        Amount needed <span>Amount Raised</span>
                      </p>
                      <p className="flex justify-between text-[#5BDEF3]">
                        {" "}
                        1,500 USDT <span> 1,500 USDT</span>
                      </p>
                      <button className="bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg">
                        View details
                      </button>
                    </Link>
                  </div>

                  <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white  bg-[#191F1C]/5 border rounded-xl shadow-lg">
                    <Link to="" className="text-white">
                      <img
                        src={project2}
                        alt=""
                        className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                      />
                      <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] ">
                        Grace Senior Citizen Home
                      </h3>
                      <p className="text-white text-justify">
                        {" "}
                        Financial support for medical supplies and monthly
                        health checkups for elderly residents.
                      </p>
                      <p className="flex justify-between">
                        Amount needed <span>Amount Raised</span>
                      </p>
                      <p className="flex justify-between text-[#5BDEF3]">
                        {" "}
                        1,500 USDT <span> 1,500 USDT</span>
                      </p>
                      <button className="bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg">
                        View details
                      </button>
                    </Link>
                  </div>
                  <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-white bg-[#191F1C]/5  rounded-xl  shadow-lg">
                    <Link to="" className="text-white">
                      <img
                        src={project3}
                        alt=""
                        className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                      />
                      <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] ">
                        Sunshine Orphanage
                      </h3>
                      <p className="text-white text-justify">
                        {" "}
                        Funding to provide school supplies and uniforms for 50
                        orphaned children.
                      </p>
                      <p className="flex justify-between">
                        Amount needed <span>Amount Raised</span>
                      </p>
                      <p className="flex justify-between text-[#5BDEF3]">
                        {" "}
                        1,500 USDT <span> 1,500 USDT</span>
                      </p>
                      <button className="bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg">
                        View details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <div className="lg:w-[100%] md:w-[100%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
              <h2 className="px-4 lg:px-0 md:px-0 lg:text-[28px] md:text-[28px] text-[20px] font-[700]  mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white ">
                More Funding Requests
              </h2>
              <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
                <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
                  <Link to="" className="text-white">
                    <img
                      src={project1}
                      alt=""
                      className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                    />
                    <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] ">
                      Bright Future Skill Academy
                    </h3>
                    <p className="text-white text-justify">
                      Funds to offer vocational training for disadvantaged
                      youths.{" "}
                    </p>
                    <p className="flex justify-between">
                      Amount needed <span>Amount Raised</span>
                    </p>
                    <p className="flex justify-between text-[#5BDEF3]">
                      {" "}
                      1,500 USDT <span> 1,500 USDT</span>
                    </p>
                    <button className="bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg">
                      View details
                    </button>
                  </Link>
                </div>

                <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white  bg-[#191F1C]/5 border rounded-xl shadow-lg">
                  <Link to="" className="text-white">
                    <img
                      src={project2}
                      alt=""
                      className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                    />
                    <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] ">
                      Grace Senior Citizen Home
                    </h3>
                    <p className="text-white text-justify">
                      {" "}
                      Financial support for medical supplies and monthly health
                      checkups for elderly residents.
                    </p>
                    <p className="flex justify-between">
                      Amount needed <span>Amount Raised</span>
                    </p>
                    <p className="flex justify-between text-[#5BDEF3]">
                      {" "}
                      1,500 USDT <span> 1,500 USDT</span>
                    </p>
                    <button className="bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg">
                      View details
                    </button>
                  </Link>
                </div>
                <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-white bg-[#191F1C]/5  rounded-xl  shadow-lg">
                  <Link to="" className="text-white">
                    <img
                      src={project3}
                      alt=""
                      className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                    />
                    <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] ">
                      Sunshine Orphanage
                    </h3>
                    <p className="text-white text-justify">
                      {" "}
                      Funding to provide school supplies and uniforms for 50
                      orphaned children.
                    </p>
                    <p className="flex justify-between">
                      Amount needed <span>Amount Raised</span>
                    </p>
                    <p className="flex justify-between text-[#5BDEF3]">
                      {" "}
                      1,500 USDT <span> 1,500 USDT</span>
                    </p>
                    <button className="bg-transparent my-4 border w-[100%] py-2 px-4 border-white text-white rounded-lg">
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </TabContext>
        </Box>
      </section>
    </main>
  );
};

export default TreasuryDonation;
