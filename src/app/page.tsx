import FifthSection from "@/components/sections/fifth-section";
import FouthSection from "@/components/sections/fouth-section";
import MainHeroSection from "@/components/sections/main-hero-section";
import SecondSection from "@/components/sections/second-section";
import ThirdSection from "@/components/sections/third-section";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <MainHeroSection />
      </section>

      <section id="services">
        <SecondSection />
      </section>

      <section id="works">
        <ThirdSection />
      </section>

      <section id="awards">
        <FouthSection />
      </section>

      <section id="projects">
        <FifthSection />
      </section>
    </main>
  );
}
