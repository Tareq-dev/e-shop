import React from "react";
import Navbar from "./../components/Navbar";
import Header from "./../components/Header";
import Exclusive from "./../components/Exclusive";
import Footer from "./../components/Footer";
import Hero from "./../components/Hero";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Exclusive />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
