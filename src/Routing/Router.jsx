import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroSectionTwo from "../components/HeroSectionTwo/HeroSectionTwo";
import HeroSectionThree from "../components/HeroSectionThree.jsx/HeroSectionThree";
import CardsLineOne from "../components/CardsLineOne/CardsLineOne";
import CardsLineTwo from "../components/CardsLineTwo/CardsLineTwo";
import EmailSection from "../components/EmailSection/EmailSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <HeroSection /> <HeroSectionTwo /> <HeroSectionThree /> <CardsLineOne />  <CardsLineTwo /> <EmailSection /> <Footer /> </>
    },
    {
      path: "/blog",
      element:<div>Blog Element</div>
    },
    {
      path: "/about",
      element: <div>About Element</div>
    }
  ],
    {
      base: "/FigmaBlogApp/"
    }
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Router