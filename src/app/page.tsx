import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="max-w-[1440px] m-auto xl:px-24 pt-10">
      <Hero />
      <Services />
      <CaseStudies />
      <Footer />
    </main>
  );
}
