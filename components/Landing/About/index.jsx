/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function About() {
  const images = [
    {
      src: "/assets/our gallery image1.png",
      alt: "Image 1",
    },
    {
      src: "/assets/our gallery image2.png",
      alt: "Image 2",
    },
    {
      src: "/assets/our gallery image3.png",
      alt: "Image 3",
    },
    {
      src: "/assets/our gallery image4.png",
      alt: "Image 4",
    },
    {
      src: "/assets/our gallery image1.png",
      alt: "Image 5",
    },

    {
      src: "/assets/our gallery image4.png",
      alt: "Image 7",
    },
    {
      src: "/assets/our gallery image4.png",
      alt: "Image 8",
    },
  ];

  const overlayTexts = [
    "This is Image 1's overlay text",
    "Here is some information about Image 2",
    "Details about Image 3 go here",
    "Interesting facts about Image 4",
    "Image 5 has this text overlay",
    "Image 6's overlay text is here",
    "Image 7 has this text overlay",
    "Image 8's overlay text is here",
  ];

  return (
    <div
      className=" mx-0 mb-10 bg-cover bg-cream px-6 md:px-0  py-10 md:py-4 md:pb-16  bg-no-repeat"
      id="about"
    >
      <div className="items-center text-center">
        <div className=" justify-center  text-[#342D6F] font-sans md:text-[20px] items-center text-center ">
          <b>TRUSTED BY 20+ SCHOOLS</b>
        </div>
        <div className=" justify-center hidden md:block">
          <img
            className="px-10 md:px-20 md:pl-40 pb-10 md:pb-20"
            src="/assets/about page image1.png"
            alt="Image 2"
          />
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="md:hidden overflow-hidden"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img
                className="w-full h-full object-cover"
                src="/assets/about page carousel image1.png"
                alt="Image 2"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img
                className="w-full h-full object-cover"
                src="/assets/about page carousels image2.png"
                alt="Image 2"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img
                className="w-full h-full object-cover"
                src="/assets/about page carousel image3.png"
                alt="Image 2"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img
                className="w-full h-full object-cover"
                src="/assets/about page carousel image4.png"
                alt="Image 2"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img
                className="w-full h-full object-cover"
                src="/assets/about page carousel image5.png"
                alt="Image 2"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img
                className="w-full h-full object-cover"
                src="/assets/about page carousel image6.png"
                alt="Image 2"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img
                className="w-full h-full object-cover"
                src="/assets/about page carousel image7.png"
                alt="Image 2"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img
                className="w-full h-full object-cover"
                src="/assets/about page carousel image8.png"
                alt="Image 2"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex flex-col-reverse md:px-10 md:flex-row justify-between items-center">
        <div className="md:w-1/2 md:px-24">
          <img
            className="w-full h-full object-cover"
            src="/assets/about page image2.png"
            alt="Image 2"
          />
        </div>

        <div className="md:w-1/2 flex flex-col pb-8 md:pb-0 md:px-10 gap-4 justify-center md:justify-normal text-center md:text-left">
          <p className="text-[#ED5251] font-sans">
            <b>WHO ARE WE?</b>
          </p>
          <p className="md:text-[36px] text-[28px] leading-tight font-sans md:pr-96 text-[#342D6F]">
            <b>About our Science Studio </b>
          </p>
          <p className="md:text-[16px] text-[12px] md:pr-20 font-sans text-[#342D6F]">
            Jigyasu is a space for exploring science and technology, designed to
            spark curiosity and imagination. Our learning method is based on
            hands-on experience and dynamic visualization, embracing the
            philosophy of &quot;Learning by Doing.&quot;
          </p>
          <p className="md:text-[16px] text-[12px] md:pr-20 pb-4 font-sans text-[#342D6F]">
            We bring raw science out of textbooks and into the physical
            experiences of students, nurturing the next generation of
            &quot;Graham Bells.&quot;
          </p>
          <button className="btn justify-center mx-24 md:mx-0 md:justify-normal bg-[#ED5251] w-auto md:w-40 h-10 text-white border-none hover:bg-stone-50 hover:text-black capitalize rounded-full">
            Know More
          </button>
        </div>
      </div>

      <div className="container mx-auto md:px-28 my-10 bg-cover bg-cream bg-center bg-no-repeat">
        <div className="flex flex-col items-center md:flex-row justify-between py-10 md:px-4 md:py-20">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-[#ED5251] font-bold">OUR PHILOSOPHY</p>
            <p className="text-[#342D6F] font-sans md:leading-tight text-[22px] md:text-[32px]">
              <b>
                We Believe in Making Science
                <br /> Fun and Engaging
              </b>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#342D6F] md:pt-4 hidden md:block text-center md:text-left text-[16px] font-sans">
              We believe in a hands-on approach to science learning, where
              students are actively
              <br />
              engaged in the learning process.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <img
              className="w-full h-full object-cover px-7"
              src="/assets/our philosophy image1.png"
              alt="Image 2"
            />
            <div className="flex flex-col md:mx-14 py-2 gap-1 text-center">
              <p className="text-[#ED5251] font-bold text-2xl">Engage</p>
              <p className="text-[#342D6F] text-[16px]">
                Students are engaged in hands-on science activities that spark
                their curiosity and interest.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-full h-full object-cover"
              src="/assets/our philosophy image2.png"
              alt="Image 2"
            />
            <div className="flex flex-col md:mx-14 py-2 gap-1 text-center">
              <p className="text-[#ED5251] font-bold text-2xl">Observe</p>
              <p className="text-[#342D6F] text-sm">
                They observe the scientific principles in action and learn
                through direct experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-full h-full object-cover px-7"
              src="/assets/our philosophy image3.png"
              alt="Image 2"
            />
            <div className="flex flex-col md:mx-14 py-2 gap-1 text-center">
              <p className="text-[#ED5251] font-bold text-2xl">Explore</p>
              <p className="text-[#342D6F] text-sm">
                Finally, they implement their knowledge by applying it to
                real-world problems and projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col md:flex-row gap-6 md:gap-20 bg-[#FFE8E8] py-10 px-6 md:px-10">
        <div className="text-center md:text-left md:pl-36 md:pr-10 ">
          <p className="text-[#342D6F] font-extrabold text-2xl ">
            AWARD RECOGNITION
          </p>
        </div>
        <div className="flex flex-row justify-center gap-6 md:gap-20 mt-4 md:pr-40 md:mt-0">
          <img
            className="w-full h-full object-cover"
            src="/assets/our philosophy image4.png"
            alt="Image 1"
          />
          <img
            className="w-full h-full object-cover"
            src="/assets/our philosophy image5.png"
            alt="Image 2"
          />
          <img
            className="w-full h-full object-cover"
            src="/assets/our philosophy image6.png"
            alt="Image 3"
          />
          {/* Add more images here */}
        </div>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="md:hidden overflow-hidden"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <p className="text-[#342D6F] font-extrabold text-2xl text-center justify-center items-center ">
              AWARD RECOGNITION
            </p>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img
              className="w-full h-full object-cover"
              src="/assets/our philosophy image4.png"
              alt="Image 2"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img
              className="w-full h-full object-cover"
              src="assets/our philosophy image5.png"
              alt="Image 2"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img
              className="w-full h-full object-cover"
              src="assets/our philosophy image6.png"
              alt="Image 2"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="container mx-auto md:my-0 my-10 bg-cover bg-cream  py-10  md:py-24 bg-center bg-no-repeat">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:pl-32 md:text-left">
          <div className="">
            <p className="text-[#ED5251] font-sans">
              <b>WHY CHOOSE US</b>
            </p>
            <p className=" pr-4 md:pr-96 md:mr-60 py-4 md:pb-10 font-sans text-[20px] md:text-[34px] text-[#342D6F]">
              <b>
                Unlock the Wonders of Science with Engaging Hands-On Learning
              </b>
            </p>
            <div className="flex flex-col-reverse md:flex-row gap-6 text-left md:text-left">
              <div className=" flex flex-col md:flex-row">
                <div className="">
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <CheckIcon className="h-5 w-5 bg-blue text-white rounded-full" />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Active Visualization & Tinkering</b>
                      </p>
                      <p className="md:text-[16px] text-[11px] pr-4 md:pr-8 pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Physical learning platform to explore science with
                        active visualization and tinkering to solve real-world
                        problems.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <CheckIcon className="h-5 w-5 bg-blue text-white rounded-full" />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Curriculum Synced Experiment</b>
                      </p>
                      <p className="md:text-[16px] text-[12px] pr-4 md:pr-12 pb-6 md:pb-14  font-sans text-[#342D6F]">
                        Approx. 600 physical experiments synced with the
                        curriculum for Grades 6-12.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <CheckIcon className="h-5 w-5 bg-blue text-white rounded-full" />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Teacher/Demonstrator Support</b>
                      </p>
                      <p className="md:text-[16px] text-[12px] pr-4 md:pr-8 pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Teacher and Demonstrator support provided by IITians to
                        guide students through their learning journey.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:pr-10">
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <CheckIcon className="h-5 w-5 bg-blue text-white rounded-full" />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Hands-On Learning Curriculum</b>
                      </p>
                      <p className="md:text-[15px] text-[12px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Hands-on learning curriculum with lesson plans, activity
                        sheets, and STEM/DIY activities.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <CheckIcon className="h-5 w-5 bg-blue text-white rounded-full" />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Program Management App</b>
                      </p>
                      <p className="md:text-[16px] text-[12px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Jigyasu program management available via our mobile
                        app/web app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-full mt-8 md:mt-0  md:p md:pt-0 image-container">
                <img
                  className="w-auto h-auto object-cover"
                  src="/assets/why choose us image.png"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex overflow-hidden md:flex-row justify-between bg-[#ED5251] items-center py-10">
        <div className="text-center md:text-left pl-6 md:pl-52">
          <p className="text-[#FFFFFF] font-sans text-6xl">
            <b>20K+</b>
          </p>
          <p className="text-[#FFFFFF] font-sans text-[26px]">STUDENTS</p>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-[#FFFFFF] font-sans text-6xl">
            <b>600+</b>
          </p>
          <p className="text-[#FFFFFF] font-sans text-[26px]">
            EXPERIMENT KITS
          </p>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-[#FFFFFF] font-sans text-6xl">
            <b>20+</b>
          </p>
          <p className="text-[#FFFFFF] font-sans text-[26px]">SCHOOLS</p>
        </div>
        <div className="text-center md:text-left mt-4 pr-6 md:pr-52 md:mt-0">
          <p className="text-[#FFFFFF] font-sans text-6xl">
            <b>16+</b>
          </p>
          <p className="text-[#FFFFFF] font-sans text-[26px]">YR EXPERIENCE</p>
        </div>
      </div>

      <div className=" md:hidden grid grid-rows-2 grid-flow-col  overflow-hidden md:flex-row justify-between bg-[#ED5251] items-center py-10">
        <div className="text-center md:text-left pl-6 md:pl-52">
          <p className="text-[#FFFFFF] font-sans text-6xl">
            <b>20K+</b>
          </p>
          <p className="text-[#FFFFFF] font-sans text-[26px]">STUDENTS</p>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-[#FFFFFF] font-sans text-6xl">
            <b>600+</b>
          </p>
          <p className="text-[#FFFFFF] font-sans text-[26px]">
            EXPERIMENT KITS
          </p>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-[#FFFFFF] font-sans text-6xl">
            <b>20+</b>
          </p>
          <p className="text-[#FFFFFF] font-sans text-[26px]">SCHOOLS</p>
        </div>
        <div className="text-center md:text-left mt-4 pr-6 md:pr-52 md:mt-0">
          <p className="text-[#FFFFFF] font-sans text-6xl">
            <b>16+</b>
          </p>
          <p className="text-[#FFFFFF] font-sans text-[26px]">YR EXPERIENCE</p>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-between md:pt-28 pt-28 py-10 ">
        <div className="flex flex-col gap-4 text-center md:text-left px-6 md:px-24">
          <p className="text-[#ED5251] font-sans">
            <b>EXPLORE OUR MODELS</b>
          </p>
          <p className="text-[#342D6F] font-sans text-[20px] md:leading-10 md:pr-96 md:mr-96 md:text-[36px]">
            <b>Enhance Science Lessons with Engaging Models</b>
          </p>
          <p className="text-[#342D6F] md:text-[16px] text-[11px] ">
            Our science models are a great way to engage students in hands-on
            learning. Each model comes with a detailed
            <br /> teacher guide and student activity guides to help you make
            the most of your science lessons.
          </p>
        </div>
      </div>
      <div className="hidden md:flex mt-4 md:pl-10 overflow-hidden md:mt-0 md:mb-20 ">
        <img
          className="w-full h-full object-cover"
          src="/assets/explore our models image1.png"
          alt="Image 2"
        />
        <img
          className="w-full h-full object-cover"
          src="/assets/explore our models image2.png"
          alt="Image 2"
        />
        <img
          className="w-full h-full object-cover"
          src="/assets/explore our models image3.png"
          alt="Image 2"
        />
        <img
          className="w-full h-full object-cover"
          src="/assets/explore our models image4.png"
          alt="Image 2"
        />
        <img
          className="w-full h-full object-cover"
          src="/assets/explore our models image5.png"
          alt="Image 2"
        />
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="md:hidden overflow-hidden"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img
              className="w-full h-full object-cover"
              src="/assets/explore our models image1.png"
              alt="Image 2"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img
              className="w-full h-full object-cover"
              src="/assets/explore our models image2.png"
              alt="Image 2"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img
              className="w-full h-full object-cover"
              src="/assets/explore our models image3.png"
              alt="Image 2"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img
              className="w-full h-full object-cover"
              src="/assets/explore our models image4.png"
              alt="Image 2"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <img
              className="w-full h-full object-cover"
              src="/assets/explore our models image5.png"
              alt="Image 2"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#342D6F] px-6 md:px-36 py-0 pb-10 md:py-28">
        <div className="flex flex-col-reverse">
          <div className="flex items-center pt-4 md:pt-0">
            <img
              className="w-full object-cover"
              src="/assets/Rectangle 65.png"
              alt="Image 2"
            />
          </div>
          <p className="text-[#FFFFFF] font-bold text-[20px] md:text-3xl md:hidden mb-4 md:mb-0 pt-8 md:pt-20">
            Ready to engage your students in hands-on science learning?
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 text-center md:text-left md:pl-20">
          <p className="text-[#FFFFFF] font-bold text-3xl hidden md:block pt-8 md:pt-20">
            Ready to engage your students in hands-on science learning?
          </p>
          <p className="text-[11px] md:text-[16px] md:leading-6 mt-10 md:mt-0 font-sans text-[#FFFFFF]">
            Jigyasu is a space for exploring science and technology, designed to
            spark curiosity and imagination. Our learning method is based on
            hands-on experience and dynamic visualization, embracing the
            philosophy of &quot;Learning by Doing.&quot;
          </p>
          <p className="text-[11px] md:text-[16px] md:leading-6 pb-4 font-sans text-[#FFFFFF]">
            We bring raw science out of textbooks and into the physical
            experiences of students, nurturing the next generation of
            &quot;Graham Bells.&quot;
          </p>
          <button className="btn bg-[#ED5251] mx-16 md:mx-0 w-auto justify-center md:justify-normal md:w-40 h-10 text-white border-none hover:bg-stone-50 hover:text-black capitalize rounded-full">
            Book Demo
          </button>
        </div>
      </div>
      <div className="container mx-auto md:px-28 mt-10 bg-cover bg-cream bg-center bg-no-repeat">
        <div className="flex flex-col items-center md:flex-row justify-between pb-10 md:px-4 md:pb-20 ">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-[#ED5251] font-bold">OUR TESTIMONIAL</p>
            <p className="text-[#342D6F] font-sans leading-tight text-[20px] md:text-[36px]">
              <b>What they say about our platform</b>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className=" px-2 md:px-3 pt-1">
                <img
                  className="h-8 w-8 bg-blue text-white rounded-full"
                  src="/assets/our testimonial image1.png"
                />
              </div>
              <div>
                <p className="text-[#ED5251] font-sans">
                  <b>Riddhi Singh</b>
                </p>
                <p className="text-[16px] pr-4 md:pr-8 pb-6 md:pb-6 font-sans text-[#342D6F]">
                  Physics Teacher
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#342D6F] md:mr-28 text-[15px] font-sans">
                <b>
                  “There are alot of models to explore which helps in
                  understanding concept”
                </b>
              </p>
              <p className="text-[15px] pr-4 md:mr-10 md:pr-20 pb-6 md:pb-14 font-sans text-[#342D6F]">
                Lorem ipsum dolor sit amet consectetur. Netus amet morbi cursus
                egestas at ut elit. Id nec metus pharetra sit at nam.Lorem ipsum
                dolor sit amet consectetur. Netus amet morbi cursus egestas at
                ut elit. Id nec metus pharetra sit at nam.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className=" px-2 md:px-3 pt-1">
                <img
                  className="h-8 w-8 bg-blue text-white rounded-full"
                  src="/assets/our testimonial image2.png"
                />
              </div>
              <div>
                <p className="text-[#ED5251] font-sans">
                  <b>Riddhi Singh</b>
                </p>
                <p className="text-[16px] pr-4 md:pr-8 pb-6 md:pb-6 font-sans text-[#342D6F]">
                  Physics Teacher
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#342D6F] md:mr-28 text-[15px] font-sans">
                <b>
                  “There are alot of models to explore which helps in
                  understanding concept”
                </b>
              </p>
              <p className="text-[15px] pr-4 md:mr-28 md:pr-8 pb-6 md:pb-14 font-sans text-[#342D6F]">
                Lorem ipsum dolor sit amet consectetur. Netus amet morbi cursus
                egestas at ut elit. Id nec metus pharetra sit at nam. Lorem
                ipsum dolor sit amet consectetur. Netus amet morbi cursus
                egestas at ut elit. Id nec metus pharetra sit at nam.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className=" px-2 md:px-3 pt-1">
                <img
                  className="h-8 w-8 bg-blue text-white rounded-full"
                  src="/assets/our testimonial image3.png"
                />
              </div>
              <div>
                <p className="text-[#ED5251] font-sans">
                  <b>Riddhi Singh</b>
                </p>
                <p className="text-[16px] pr-4 md:pr-16 pb-6 md:pb-6 font-sans text-[#342D6F]">
                  Physics Teacher
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#342D6F] md:mr-36 text-[15px] font-sans">
                <b>
                  “There are alot of models to explore which helps in
                  understanding concept”
                </b>
              </p>
              <p className="text-[16px] pr-4 md:mr-28 md:pr-8 pb-6 md:pb-14 font-sans text-[#342D6F]">
                Lorem ipsum dolor sit amet consectetur. Netus amet morbi cursus
                egestas at ut elit. Id nec metus pharetra sit at nam. Lorem
                ipsum dolor sit amet consectetur. Netus amet morbi cursus
                egestas at ut elit. Id nec metus pharetra sit at nam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:pl-28 mt-10 bg-cover bg-[#FFDE95] bg-opacity-15 bg-center bg-no-repeat">
        <div className="flex flex-col items-center md:flex-row justify-between md:pl-4  ">
          <div className="flex flex-col gap-4 md:pb-28 text-center pt-10 md:pt-20 md:text-left">
            <p className="text-[#2C7698] font-bold">UNLOCK BENEFITS</p>
            <p className="text-[#ED5251] font-sans leading-tight text-[24px] md:pr-64 md:text-[36px]">
              <b>Our Student's Journey Over a Span of time</b>
            </p>
            <div className="flex flex-col-reverse md:flex-row md:gap-20 text-left md:text-left pl-14">
              <div className="flex flex-col md:flex-row">
                <ul className="list-disc marker:text-yellow-400 marker:text-2xl md:marker:text-3xl text-[#2C7698] text-[11px] md:text-[14px] leading-4">
                  <li>
                    <b>Increase in visualization capacity</b>
                  </li>
                  <li>
                    <b>Students develop experimental skills</b>
                  </li>
                  <li>
                    <b>Deeper understanding, longer retention</b>
                  </li>
                </ul>
              </div>
              <div className=" md:pl flex flex-col md:flex-row">
                <ul className="list-disc marker:text-yellow-400 marker:text-2xl md:marker:text-3xl text-[#2C7698] text-[11px] md:text-[14px] leading-4">
                  <li>
                    <b>
                      Application of science concepts to real world scenarios
                    </b>
                  </li>
                  <li>
                    <b>Skill addition relevant to industry</b>
                  </li>
                  <li>
                    <b>Product development experience</b>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn hidden md:block bg-[#ED5251] mx-16 md:mx-0 md:mt-10 w-auto justify-center md:justify-normal md:w-40 h-10 text-white border-none hover:bg-stone-50 hover:text-black capitalize rounded-full">
              Contact us
            </button>
          </div>
          <div className="md:pr-10 ">
            <img
              className=" text-white w-full"
              src="/assets/unlock benefits.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between md:pt-20 py-10 pt-20 md:py-10 md:pl-16 ">
        <div className="flex flex-col gap-4 text-center md:text-left px-6 md:px-24">
          <p className="text-[#ED5251] font-sans">
            <b>OUR GALLERY</b>
          </p>
          <p className="text-[#342D6F] font-extrabold text-[20px] md:text-[36px] md:leading-10 md:pr-96 md:mr-96">
            Students Discovering Science Firsthand
          </p>
          <p className="text-[#342D6F] text-[11px] md:text-[16px] ">
            Our science models are a great way to engage students in hands-on
            learning. Each model comes with a detailed
            <br /> teacher guide and student activity guides to help you make
            the most of your science lessons.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-0 md:flex-row justify-between md:pt- md:px-44 overflow-hidden">
        <div className="columns-1 sm:columns-2 lg:columns-3 h-screen py-10 md:py-20 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative mb-4 break-inside-avoid group flex flex-col"
            >
              <div className="relative w-full ">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-contain rounded-lg transition-all duration-300 group-hover:opacity-70"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-[#342D6F] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-white text-lg font-semibold text-center px-4">
                  {overlayTexts[index]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
