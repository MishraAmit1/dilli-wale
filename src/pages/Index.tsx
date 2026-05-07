import ScrollRickshaw from "@/components/ScrollRickshaw";
import Navbar from "@/components/dw/Navbar";
import HeroSection from "@/components/dw-new/HeroSection";
import PinkMandalaSection from "@/components/dw-new/PinkMandalaSection";
import SkyBlueSection from "@/components/dw-new/SkyBlueSection";
import Footer from "@/components/dw-new/Footer";
import BestSellerGridSection from "@/components/dw-new/BestSellerGridSection";
import AmbienceGallerySection from "@/components/dw-new/AmbienceGallerySection";
// import MarqueeTicker from "@/components/dw-new/MarqueeTicker";
// import FoodSection from "@/components/dw-new/FoodSection";
// import ReelsSection from "@/components/dw-new/ReelsSection";
// import StoryStrip from "@/components/dw-new/StoryStrip";
// import WindLeavesCTA from "@/components/dw-new/WindLeavesCTA";
// import Footer from "@/components/dw-new/Footer";

const Index = () => (
  <main className="min-h-screen bg-dw-cream font-body text-dw-dark animate-content-fade">
    <ScrollRickshaw />
    <Navbar />
    <HeroSection />
    <PinkMandalaSection />

    <SkyBlueSection />
    <BestSellerGridSection />
    <AmbienceGallerySection />
    <Footer />
    {/* new sections will go here */}
  </main>
);

export default Index;
