import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/heroAnimation";
import Image from "next/image";
import { FlipWords } from "../components/ui/flipWords";
import Link from "next/link";
import { ArrowRightIcon } from "../commonIcon";

export const HeroBanner = () => {
  const words = ["ideate", "optimise", "code", "modern"];
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="mx-auto max-w-7xl">
          <div className="flex w-11/12 mx-auto">
            <div className="space-y-4 mx-auto justify-center text-center relative overflow-hidden z-40">
              <h1 className="text-primary-white font-bold text-8xl leading-tight">
                A landing page template that works for you
              </h1>

              <h3 className="text-primary-white/70 text-lg font-light text-center w-7/12 mx-auto">
                Oricmeta is a Website Design & Development Firm specialized with Digital Solution. our young
                and experienced team incorporates.
              </h3>

              <div className="flex items-center space-x-2 w-7/12 mx-auto justify-center ">
                <Link
                  href=""
                  className="bg-gradient-to-r from-primary-light to-primary-main text-primary-white py-2 px-3 rounded-lg flex items-center space-x-1"
                >
                  Schedule a Call <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link href="">Our Work</Link>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 z-0 bg-heroBanner"></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/0 to-zinc-950"></div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};
