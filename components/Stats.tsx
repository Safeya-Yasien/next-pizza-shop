import { Users, Pizza, Trophy, Clock, LucideIcon } from "lucide-react";
import { memo } from "react";

type TStat = {
  icon: LucideIcon;
  number: string;
  label: string;
};

const stats: TStat[] = [
  { icon: Users, number: "50,000+", label: "Happy Customers" },
  { icon: Pizza, number: "100,000+", label: "Pizzas Delivered" },
  { icon: Trophy, number: "15+", label: "Awards Won" },
  { icon: Clock, number: "5", label: "Years of Excellence" },
];

const StatCard = memo(({ number, label, icon: Icon }: TStat) => {
  return (
    <div className="group">
      <div
        className="bg-black/20 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10
                shadow-md hover:shadow-2xl  hover:border-white/30
                transition-all duration-300"
      >
        {/* Icon */}
        <div className="relative w-16 h-16 mx-auto flex items-center justify-center mb-4">
          <Icon
            className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300"
            strokeWidth={2.5}
          />
          <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
        </div>

        {/* Number */}
        <div className="text-3xl lg:text-4xl font-extrabold mb-2">{number}</div>

        {/* Label */}
        <div className="text-sm lg:text-base font-medium tracking-wide opacity-90">
          {label}
        </div>
      </div>
    </div>
  );
});

StatCard.displayName = "StatCard";

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-tr from-red-700 via-orange-600 to-yellow-500">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
