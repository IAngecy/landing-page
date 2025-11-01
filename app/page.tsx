import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Pricing showComparisonButton={true} />
        <Workflow />
        {/* <FAQ /> */}
      </main>
      <Footer />
    </div>
  );
}
