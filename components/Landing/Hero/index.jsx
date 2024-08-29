/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Navbar from "../Navbar";

export default function Hero() {
  return (
    <section className="">
      <Navbar />
      <div className="hero-content overflow-hidden w-full mx-0 px-0  bg-cover bg-[#ED5251]  md:pt-16 pt-28 object-cover bg-no-repeat flex flex-col md:flex-row items-center">
        <div className="text-content md:pb-14 px-6 md:px-0 pb-10 flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left md:pl-36">
          <button className="btn w-56 bg-[#FFDE95] bg-opacity-20 text-[#F8C24B] font-sans text-[18px] border-none hover:bg-stone-50 hover:text-black capitalize rounded-full h-10  md:mb-0">
            <b>LEARNING BY DOING</b>
          </button>
          <p className="text-[52px] leading-tight font-sans text-white md:text-[64px]">
            <b>
              A New Way <br /> of Learning
            </b>
          </p>
          <p className="text-[16.1px] font-source font-sans text-[#F3F3F3] md:text-[18px] md:pr-40 mt-4">
            Hands-on methods to drive student success and engagement, empowering
            learners through the power of active learning for academic
            excellence.
          </p>
          <button className="btn bg-[#342D6F] text-white font-bold border-none hover:bg-stone-50 hover:text-black capitalize rounded-full w-48 h-12 mt-4 md:mt-8">
            Book Demo
          </button>
        </div>
        <div className="absolute overflow-hidden hidden md:block top-0 right-0   md:mt-6 md:mr-0 ">
          <Image
            className="w-12  md:w-full md:pt-36 "
            src="/assets/Ellipse 23.png"
            alt="ellipse 23 image"
            width={500} // specify the width
            height={500} // specify the height
          />
        </div>

        <div className="relative  md:mt-0 md:ml-10 flex justify-center items-center">
          <div className="relative">
            {/* Blue Dot Image */}
            <Image
              className="absolute pl-44 px-4 md:px-0 pt-28 inset-0 z-10  w-1px md:w-auto md:pt-60 md:pl-80 md:max-w-full"
              src="/assets/full blue dot.png"
              alt="Blue Dot Image"
              width={500} // specify the width
              height={500} // specify the height
            />

            {/* Yellow Dot Image */}
            <Image
              className=" absolute inset-0 px-4 md:px-0 z-5 w-4px  pr-32 pt-24 md:pt-40 md:pr-36 md:w-auto md:h-auto md:max-w-full"
              src="/assets/full yellow dot.png"
              alt="Yellow Dot Image"
              width={500} // specify the width
              height={500} // specify the height
            />

            {/* Hero Image */}
            <Image
              className="relative md:mt-9 px-4 md:px-0 z-20  w-full md:w-3/4 lg:w-full xl:w-full md:max-w-4xl"
              src="/assets/hero.png"
              alt="Hero Image"
              width={500} // specify the width
              height={500} // specify the height
            />

            {/* Ellipse 23 Image */}
            <Image
              className="absolute md:mt-28 md:mr-20 top-0 right-0 w-6 md:w-10 mt-10 mr-16 "
              src="/assets/Ellipse 28.png"
              alt="Small Circle Image"
              width={500} // specify the width
              height={500} // specify the height
            />
            <div className="absolute overflow-hidden   top-0 right-0   md:mt-10 md:mr-0 md:hidden ">
              <Image
                className="w-12  md:w-full md:pt-36  "
                src="/assets/Ellipse 23.png"
                alt="ellipse 23 image"
                width={500} // specify the width
                height={500} // specify the height
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
