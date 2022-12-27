import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from "../component/Header";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import Cookies from "../component/Cookies";

import { datas } from "../data";

function Home() {
  const [showCookies, setShowCookies] = useState(true);
  return (
    <>
      <Header />
      <main>
        <Carousel>
          {datas.map((data) => (
            <Hero
              key={data.heading}
              heading={data.heading}
              description={data.description}
              buttonlink={data.buttonlink}
              buttontext={data.buttontext}
              HeroImg={data.HeroImg}
              altImgText={data.altImgText}
            />
          ))}
        </Carousel>
      </main>
      <Footer />
      {showCookies && <Cookies setShowCookies={setShowCookies} />}
    </>
  );
}

export default Home;
