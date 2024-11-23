import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";


const Home = lazy(() => import("../pages/Home"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const Register = lazy(() => import('../pages/dashboard/Register'));
const TreasuryDonation = lazy(() => import('../pages/dashboard/TreasuryDonation'));
const FundingRequests = lazy(() => import('../pages/dashboard/FundingRequests'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const DashboardLayout = lazy(() =>
  import("../layout/DashboardLayout")
);
const AllDonations = lazy(() =>
  import("../pages/dashboard/AllDonations")
);
const Analytics = lazy(() =>
  import("../pages/dashboard/Analytics")
);


const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />

    </Route>
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<TreasuryDonation />} />
      <Route path="register" element={<Register />} />
      <Route path="treasury-donation" element={<TreasuryDonation />} />
      <Route path="funding-requests" element={<FundingRequests />} />
      <Route path="funding-requests/:id" element={<ProjectDetail />} />
      <Route path="all-donations" element={<AllDonations />} />
      <Route path="analytics" element={<Analytics />} />
    </Route>

  </Route>
))


const AllRoutes = () => {


  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>

        <RouterProvider router={router} />

      </Suspense>
    </div>
  );
};

export default AllRoutes;