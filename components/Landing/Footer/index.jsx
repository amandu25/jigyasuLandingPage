/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NAV_LINKS } from "@/constants";

const navigation = NAV_LINKS;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Footer() {
  return (
    <section className="footer container w-full bg-[#342D6F]">
      <div className="footer-content container px-4 md:px-0  mx-0 my-10 bg-cover md:pt-16 pt-28 object-cover bg-no-repeat flex flex-col md:flex-row items-center">
        <div className="text-content md:pb-14 pb-10 flex flex-col md:flex-row md:text-left pl-0 md:pl-36">
          <div className="flex flex-col md:pr-32 ">
            <div className="flex flex-shrink-0 md:justify-normal">
              <img className="h-10 w-auto" src="/logo.png" alt="Your Company" />
            </div>
            <div>
              <p className="md:text-[16px] text-[10px] text-[#FFFFFF] font-sans px-2">
                Jigyasu is an educational startup with "Learning By Doing" as
                its guiding principle. Founded by Mr. Satwik Das, an IIT
                Kharagpur Alumnus. Jigyasu aims to bring abstract concepts from
                textbooks to real life.
              </p>
            </div>
          </div>
          <div className=" md:pb-14 gap-16 md:gap-0 pb-10 flex flex-row md:flex-row text-left pt-16 md:pt-0 md:items-start pr-0 ">
            <div className="flex flex-col md:flex-row text-left md:items-center md:space-x-0 ml-auto ">
              <div className="flex flex-col md:flex-col pl-3 md:pl-0 text-left md:items-center md:pr-60 ">
                <p className="text-[16px] text-[#F8C24B] md:pl-2  font-sans">
                  Links
                </p>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-white hover:text-primary",
                      "rounded-md md:px-2 md:py-2 inline-flex font-sans text-sm md:text-sm"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="md:pr-40 md:gap-4 pl-3 md:pl-0 flex flex-col justify-between">
                <p className="text-[16px] text-[#FFFFFF] font-sans">
                  Disclaimer
                </p>
                <p className="text-[16px] text-[#FFFFFF] font-sans">
                  Privacy Policy
                </p>
                <p className="text-[16px] text-[#FFFFFF] font-sans">
                  Terms & Conditions
                </p>
              </div>
            </div>
            <div className=" flex flex-col md:pr-48 md:pl-0 gap-4 md:gap-2">
              <p className="text-[16px] text-[#F8C24B] font-sans">
                Contact Details
              </p>
              <p className="text-[12px] text-[#FFFFFF] font-sans">
                +91 99987823
              </p>
              <p className="md:text-[8px] text-[#FFFFFF] font-sans">
                HIG Duplex #44, Saileshree Vihar, Opp to DAV CSPUR, BBSR- 751024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
