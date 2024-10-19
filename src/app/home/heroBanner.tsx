import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/heroAnimation";
import Image from "next/image";

export const HeroBanner = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4">
          <div className="text-center space-y-4">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-6xl font-bold">
              ORICMETA TECHNOLOGY
            </h1>
            <h2 className="text-white text-4xl">India-Based Digital Agency</h2>
            <h3 className="text-white text-xl font-light">
              Oricmeta is a Website Design & Development Firm specialized with Digital Solution. our young and
              experienced team incorporates the perfect mix of insightful designs, calculated tactics and
              supreme creativity along with state of art technology to build result driven relations.
            </h3>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};
