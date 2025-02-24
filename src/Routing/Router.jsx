import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navabar from "../components/Navbar/Navabar";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroSectionTwo from "../components/HeroSectionTwo/HeroSectionTwo";
import HeroSectionThree from "../components/HeroSectionThree.jsx/HeroSectionThree";
import CardsLineOne from "../components/CardsLineOne/CardsLineOne";
import CardsLineTwo from "../components/CardsLineTwo/CardsLineTwo";
import EmailSection from "../components/EmailSection/EmailSection";
import Footer from "../components/Footer/Footer";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navabar /> <HeroSection /> <HeroSectionTwo /> <HeroSectionThree /> <CardsLineOne />  <CardsLineTwo /> <EmailSection /> <Footer /> </>
    },
    {
      path: "/blog",
      // element:
    },
    {
      path: "/about",
      // element:
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Router