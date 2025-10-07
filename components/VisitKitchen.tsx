import { MapPin, Phone, Clock, Mail, ChefHat } from "lucide-react";
import Image from "next/image";

export default function VisitKitchen() {
  return (
    <section className="py-20 bg-white dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              Visit Our <span className="text-pizza-orange">Kitchen</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Come see our master chefs in action! Watch as we hand-toss fresh
              dough and fire up our traditional wood-burning ovens.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: (
                    <>
                      123 Pizza Street <br /> Downtown, NY 10001
                    </>
                  ),
                  color: "from-red-500 to-orange-500",
                },
                {
                  icon: Phone,
                  text: "+1 (555) 123-PIZZA",
                  color: "from-green-500 to-emerald-400",
                },
                {
                  icon: Clock,
                  text: "Open 11AM – 11PM Daily",
                  color: "from-yellow-500 to-orange-400",
                },
                {
                  icon: Mail,
                  text: "hello@sahandpizza.com",
                  color: "from-blue-500 to-indigo-400",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r ${item.color} text-white shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-base font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative ">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/visitKitchen.webp"
                alt="SahandPizza Kitchen"
                width={600}
                height={400}
                className="object-cover w-full h-[350px] sm:h-[450px] "
              />
              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 text-sm sm:text-base shadow-md flex flex-col gap-2">
                <p className="flex items-center gap-2 font-semibold">
                  <ChefHat /> Master Chef Antonio
                </p>
                <p className="text-sm">
                  25+ years of authentic Italian cooking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
