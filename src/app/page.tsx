import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowIBuild from "@/components/HowIBuild";
import WorkSection from "@/components/work/WorkSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <HowIBuild />
      <About />
      <Contact />
    </>
  );
}