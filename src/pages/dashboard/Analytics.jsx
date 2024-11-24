import vector from "../../assets/vector.svg";
import AnalyticsBanner from "../../components/AnalyticsBanner";
import { BarChart } from "@mui/x-charts/BarChart";

const Analytics = () => {

  return (
    <main className="bg-[#02080B]">
      <AnalyticsBanner />
      <section
        className="bg-[#02080B] bg-no-repeat "
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "10%",
          backgroundPosition: "left top",
        }}
      >
        <div className="lg:w-[95%] md:w-[95%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0 bg-white mt-4">
          <BarChart
            xAxis={[
              {
                id: "barCategories",
                data: ["Requests", "Donations", "Funded Requests"],
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: [2, 5, 3],
              },
            ]}
            width={500}
            height={300}
          />
        </div>
      </section>
    </main>
  );
};

export default Analytics;
