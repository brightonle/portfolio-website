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

      {/* Hero: fixed, blurs + sinks as About slides over it */}
      <ScrollStackSection>
        <Hero />
      </ScrollStackSection>

      {/* About: natural height, Projects peeks below */}
      <div style={{ position: "relative", zIndex: 2, backgroundColor: "#ffffff", borderRadius: "24px 24px 0 0" }}>
        <About />
      </div>

      {/* Projects: sits right below About so it peeks at the bottom */}
      <div style={{ position: "relative", zIndex: 3, backgroundColor: "#0a0a0a" }}>
        <Projects />
      </div>

      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
