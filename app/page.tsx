import ScrollProgress from "@/components/ScrollProgress";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
