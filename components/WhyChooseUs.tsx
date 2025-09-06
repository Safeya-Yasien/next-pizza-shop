import { Flame, Zap, LeafyGreen, Trophy, LucideIcon } from "lucide-react";
import { memo } from "react";

type TFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  bg: string;
  color: string;
};

const features: TFeature[] = [
  {
    icon: Flame,
    title: "Wood-Fired Perfection",
    description:
      "Traditional wood-fired ovens for that authentic crispy crust and smoky flavor.",
    bg: "bg-orange-100",
    color: "text-pizza-orange",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "25-minute average delivery time. Hot, fresh pizza when you want it.",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    icon: LeafyGreen,
    title: "Premium Ingredients",
    description:
      "Only the finest Italian ingredients, imported mozzarella, and fresh herbs.",
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    icon: Trophy,
    title: "Award Winning",
    description:
      "Voted #1 Pizza in the city for 3 consecutive years by food critics.",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

const FeatureCard = memo(
  ({ icon: Icon, title, description, bg, color }: TFeature) => (
    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
      <div
        className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${bg} mb-6`}
      >
        <Icon
          className={`${color} w-8 h-8`}
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
);

FeatureCard.displayName = "FeatureCard";

const WhyChooseUs = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Why Choose <span className="text-pizza-orange">Pizzaro?</span>
        </h2>
        <p className="text-lg text-gray-600">
          We&apos;re not just another pizza place. We&apos;re passionate about
          delivering authentic Italian flavors right to your door.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
