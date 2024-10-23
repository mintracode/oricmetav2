import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/heroAnimation";
import Image from "next/image";
import { FlipWords } from "../components/ui/flipWords";

export const HeroBanner = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2">
            <div className="text-center space-y-4">
              <h1 className="">ORICMETA TECHNOLOGY</h1>
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-bold text-left">
                Help You To <FlipWords words={words} />{" "}
              </h2>
              <h3 className="text-white text-lg font-light text-justify">
                Oricmeta is a Website Design & Development Firm specialized with Digital Solution. our young
                and experienced team incorporates the perfect mix of insightful designs, calculated tactics
                and supreme creativity along with state of art technology to build result driven relations.
              </h3>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};
