import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OrganisingCommittee from "@/components/OrganisingCommittee";
import EventsPreview from "@/components/EventsPreview";
import SurpriseEvent from "@/components/SurpriseEvent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OrganisingCommittee />
      <EventsPreview />
      <SurpriseEvent />
      <Footer />
    </div>
  );
};

export default Index;
