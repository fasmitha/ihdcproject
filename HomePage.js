import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import CarouselBox from "./CarouselBox";
const HomePage = () => {
  const images = {
    logo2: "/assets/logo2.png",
    profile: "/assets/profile.svg",
    logo: "/assets/logo.jpg",
  };
  return (
    <Header>
      <div className="flex flex-row justify-center">
        <div className="basis-3/4 flex flex-row ml-[35vw]">
          <NavBar />
        </div>
        <div className="basis-1/4 flex flex-col items-center">
          <img src={images.profile} className="w-16 h-16" />
          <div className="">Joseph Lazar</div>
        </div>
      </div>
      <div className="w-[70vw] h-[60vh] mx-auto flex flex-row ">
        <div className="w-1/4 h-full">
          <div className="text-3xl">New Arrival</div>
          <div className="mt-[2vh] text-xs font-semibold">
            <u>JOIN</u> TODAY
          </div>
          <div className="w-full h-auto flex flex-col items-center">
            <img src={images.logo} className="w-[100%] h-auto " />
            <button className="border-2 text-sky-400 border-gray-400 bg-gradient-to-b from-white to-gray-300 rounded-full px-[1vw] py-[0.5vh]">
              JOIN NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col w-3/4 h-full">
          <div className=" text-3xl flex flex-row self-center">
            Unlock Premium Features Now
          </div>
          <CarouselBox />
          <button className="bg-teal-500 w-[20vw] self-center rounded-full mb-[2vh] py-[0.5vh] text-white">UNLOCK NOW</button>
          <button className="bg-teal-500 w-[20vw] self-center rounded-full py-[0.5vh] text-white">DETAILS</button>
        </div>
      </div>
    </Header>
  );
};

export default HomePage;
