import vector from '../../assets/vector.svg';
import AnalyticsBanner from "../../components/AnalyticsBanner";
import { BarChart } from '@mui/x-charts/BarChart';

const Analytics = () => {
    

    return (
        <main className="bg-[#02080B]">
            <AnalyticsBanner />
            <section className="bg-[#02080B] bg-no-repeat "
                style={{
                    backgroundImage: `url(${vector})`,
                    backgroundSize: "10%",
                    backgroundPosition: "left top",
                }}>

                <div className='lg:w-[95%] md:w-[95%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0 text-white'>

                    <BarChart color='white'
                        series={[
                            { data: [35, 44, 34] },
                            { data: [51, 6, 30] },
                            { data: [15, 25, 50] },
                            { data: [60, 50, 25] },
                        ]}
                        height={290}
                        xAxis={[{ data: ['Requests ', 'Donations', 'Funded Requests'], scaleType: 'band' }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                        yAxis={[{color:'white'}]}
                       
                    />
                </div>
            </section>
        </main>
    );
};

export default Analytics;
