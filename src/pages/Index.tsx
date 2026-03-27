import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/PartnerLogos";
import StatsBar from "@/components/StatsBar";
import NetworkOverview from "@/components/NetworkOverview";
import TraditionsSection from "@/components/TraditionsSection";
import RateCard from "@/components/RateCard";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <StatsBar />
      <NetworkOverview />
      <TraditionsSection />
      <RateCard />
      <CTASection />
    </div>
  );
};

export default Index;
