import React from "react";
import girl from "../images/a girl.jpg";

function Hero_Section() {
  return (
    <div className="mt-4">
      <div className=" mx-1   dark:bg-gray-800 shadow-[inset_0_0_20px_0px_var(--grayText)] dark:shadow-[inset_0_0_10px_0px_var(--blueShadow)] rounded-2xl p-3">
        <div className="flex justify-around w-full ">
          {/* PROFILE IMG  */}
          <div className="rounded-full h-30 w-30 sm:w-40 dark:shadow-xl dark:shadow-indigo-900 sm:h-40 md:h-60 md:w-60 lg:h-70 lg:w-70">
            <img
              src={girl}
              alt="profile img"
              className="rounded-full h-full w-full object-cover"
            />
          </div>
          {/* SELF INFORMATION  */}
          <div className="flex items-center justify-center flex-col gap-2 px-3">
            <h1 className="font-semibold text-xl text-gray-800 sm:text-3xl md:text-4xl  dark:text-(--whiteText) lg:text-5xl">
              Anzel kessy
            </h1>
            <h3 className="text-center dark:text-darkText text-gray-600 font-semibold sm:text-xl text-xs md:text-2xl ">
              I am a full stauk Web devloper{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_Section;
