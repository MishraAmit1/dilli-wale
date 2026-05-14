import Navbar from "@/components/dw-new/Navbar";
import HeroSection from "@/components/dw-new/HeroSection";
import PinkMandalaSection from "@/components/dw-new/PinkMandalaSection";
import EventSection from "@/components/dw-new/EventSection";
import StorySection from "@/components/dw-new/StorySection";
import SombreroSection from "@/components/dw-new/SombreroSection";
import ConversionSection from "@/components/dw-new/ConversionSection";
import CarouselSection from "@/components/dw-new/CarouselSection";
import TestimonialsSection from "@/components/dw-new/TestimonialsSection";
import LocationSection from "@/components/dw-new/LocationSection";

const Index = () => (
  <main className="min-h-screen bg-dw-cream font-body text-dw-dark animate-content-fade">
    <Navbar />
    <HeroSection />
    {/* <PinkMandalaSection /> */}
    <EventSection />
    <StorySection />
    <SombreroSection />
    <ConversionSection />
    <CarouselSection />
    <TestimonialsSection />
    <LocationSection />
  </main>
);
export default Index;
