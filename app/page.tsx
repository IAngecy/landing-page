import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* <Hero /> */}
        {/* <Pricing /> */}
        <Workflow />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
