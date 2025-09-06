import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Testimonials/>
      <Stats/>
    </div>
  );
};
export default HomePage;
