import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import VisitKitchen from "@/components/VisitKitchen";
import WhyChooseUs from "@/components/WhyChooseUs";

// import { Hero, Stats, Testimonials, WhyChooseUs } from "@/components";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <Stats />
      <VisitKitchen />
    </div>
  );
};
export default HomePage;
