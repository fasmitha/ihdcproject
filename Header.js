import React, { Children } from "react";

const Header = ({children}) => {
  const images = {
    logo2: "/assets/logo2.png",
  };
  return (
    <div className="w-[98vw] min-h-[96vh] mx-auto border-2 border-gray-200">
      <div className="w-full h-[8vh] bg-gray-200 flex flex-row items-center">
        <img src={images.logo2} className="w-[6vw] h-[6vw] ml-[20vw]" />
        <div className="pl-[20%] ">XYZ SYSTEMS LLP</div>
      </div>
      {children}
    </div>
  );
};

export default Header;
