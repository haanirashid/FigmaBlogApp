import {
  createBrowserRouter,
  RouterProvider,
  useRouteError
} from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroSectionTwo from "../components/HeroSectionTwo/HeroSectionTwo";
import HeroSectionThree from "../components/HeroSectionThree.jsx/HeroSectionThree";
import CardsLineOne from "../components/CardsLineOne/CardsLineOne";
import CardsLineTwo from "../components/CardsLineTwo/CardsLineTwo";
import EmailSection from "../components/EmailSection/EmailSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import BlogIntro from "../components/BlogIntro/BlogIntro";
import HeroSectionDivider from "../components/HeroSectionDivider/HeroSectionDivider";
import CreateIntro from "../components/CreateIntro/CreateIntro";
import BlogForm from "../components/BlogForm/BlogForm";
import OurBlog from "../components/OurBlog/OurBlog";
import Signin from "../components/Signin/Signin";
import Login from "../components/Login/Login";

function Router() {

  function CustomErrorComponent() {
    const error = useRouteError();
    console.error("Routing error:", error);
    return <div>Something went wrong: {error.statusText || error.message}</div>;
  }


  function Home() {
    return (
      <>
        <Navbar /> <HeroSection /> <HeroSectionTwo /> <HeroSectionThree /> <HeroSectionDivider hOne="Our Blogs"/> <OurBlog /> <CardsLineOne />  <HeroSectionDivider hOne ="Popular Post"/> <CardsLineTwo /> <EmailSection /> <Footer />
      </>
    )
  }

  function Blog() {
    return (
      <>
        <Navbar /> <BlogIntro /> <CardsLineTwo /> <CardsLineOne /> <EmailSection /> <Footer />
      </>
    )
  }

  function createBlog(){
    return(
      <>
      <Navbar /> <CreateIntro /> <BlogForm /> <EmailSection /> <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: Home(),
      errorElement: <CustomErrorComponent />
    },
    {
      path: "/blog",
      element: Blog(),
      errorElement: <CustomErrorComponent />
    },
    {
      path: "/about",
      element: <div>About Element</div>,
      errorElement: <CustomErrorComponent />
    },
    {
      path: "/signin",
      element: <> <Signin /> </>,
      errorElement: <CustomErrorComponent />
    },
    {
      path: "/login",
      element: <><Login /></>,
      errorElement: <CustomErrorComponent />
    },
    {
      path: "/createblog",
      element: createBlog(),
      errorElement: <CustomErrorComponent />
    }
  ],
    { basename: "/FigmaBlogApp/" }
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Router