import Image from "next/image";
import { HeroBanner } from "./home/heroBanner";
import { About } from "./home/about";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <About />
    </>
  );
}
