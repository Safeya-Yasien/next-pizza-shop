import { Shield, Truck, CreditCard, Award } from "lucide-react";

const BADGES = [
  {
    icon: Shield,
    title: "Safe & Secure",
    subtitle: "SSL Protected",
    color: "text-blue-600",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "25-min Avg",
    color: "text-green-600",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    subtitle: "Cards Accepted",
    color: "text-indigo-600",
  },
  {
    icon: Award,
    title: "Quality Assured",
    subtitle: "100% Fresh",
    color: "text-amber-600",
  },
];

export default function TrustBadges() {
  return (
    <section
      className="relative bg-white/70"
      aria-labelledby="trust-badges-heading"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 id="trust-badges-heading" className="sr-only">
          Trust and Security Badges
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {BADGES.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 bg-orange-50 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-200"
            >
              <b.icon className={`h-6 w-6 ${b.color}`} aria-hidden="true" />
              <p className="text-gray-900 font-medium mt-2 text-sm">
                {b.title}
              </p>
              <p className="text-gray-500 text-xs">{b.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
