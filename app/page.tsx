import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Workflow from "@/components/Workflow";
import { posts } from "@/data/pricing";
import dynamic from "next/dynamic";

const InfiniteMenu = dynamic(() => import("@/components/InfiniteMenu"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center">
      <div className="text-foreground/60">Carregando posts...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Pricing showComparisonButton={true} />
        <Workflow />

        <div className="w-9/12 mx-auto">
          <div className="h-[600px] relative">
            <InfiniteMenu items={posts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
