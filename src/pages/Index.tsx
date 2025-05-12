
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/Hero";
import FeatureSection from "@/components/home/FeatureSection";
import TimelinePreview from "@/components/home/TimelinePreview";
import CultureCards from "@/components/home/CultureCards";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <TimelinePreview />
        <CultureCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
