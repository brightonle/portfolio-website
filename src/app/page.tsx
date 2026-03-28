import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollStackSection from "@/components/ScrollStackSection";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero: stays frozen/sticky, blurs as About slides over it */}
      <ScrollStackSection>
        <Hero />
      </ScrollStackSection>

      {/* About: white card that slides up over the blurred Hero */}
      <div style={{ position: "relative", zIndex: 2, backgroundColor: "#ffffff", borderRadius: "24px 24px 0 0" }}>
        <About />
      </div>

      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
