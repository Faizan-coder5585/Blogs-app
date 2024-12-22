

import Hero from "@/app/Hero";
import Services from "./services/page";
import Blogs from "./blogs/page";
import About from "./about/page";
import Contact from "./contact/page";
import Brand from "./brand/page";

// import Test from "./Test";

export default function Home() {
  return (
    <>
      <Hero />
      <Services/>
      <Blogs />
      <About />
      <Contact />
      <Brand />
      {/* <Test />  */}
    </>
  );
}