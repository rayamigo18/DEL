import React from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Products from "./Products";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <AboutUs />
      <Products />
      <ContactUs />
    </>
  );
}

export default Home;
