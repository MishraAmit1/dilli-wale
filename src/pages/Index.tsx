import Navbar from "@/components/dw/Navbar";
import HeroSection from "@/components/dw/HeroSection";
import MarqueeTicker from "@/components/dw/MarqueeTicker";
import FoodSection from "@/components/dw/FoodSection";
import ReelsSection from "@/components/dw/ReelsSection";
import StoryStrip from "@/components/dw/StoryStrip";
import CTASection from "@/components/dw/CTASection";
import WindLeavesCTA from "@/components/dw/WindLeavesCTA";
import Footer from "@/components/dw/Footer";

const Index = () => (
  <main className="min-h-screen bg-dw-cream font-body text-dw-dark">
    <Navbar />
    <HeroSection />
    <MarqueeTicker />
    <FoodSection />
    <ReelsSection />
    <StoryStrip />
    {/* <CTASection /> */}
    <WindLeavesCTA />
    <Footer />
  </main>
);

export default Index;
