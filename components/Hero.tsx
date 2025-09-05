import { Flame, Pizza, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-[#FDE5E2]">
      <div className="container mx-auto px-4 lg:px-12 py-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <div className="space-y-8">
            {/* badge */}
            <div className="bg-orange-100 border border-orange-300 font-medium py-2 px-6 inline-flex items-center gap-3 rounded-full text-orange-800 shadow-sm">
              <Flame className="text-pizza-red w-5 h-5" />
              <span>Fresh</span>
              <ul className="list-disc flex items-center gap-6 ml-4 text-sm">
                <li>Hot</li>
                <li>Delicious</li>
              </ul>
            </div>

            {/* heading */}
            <h1 className="text-5xl md:text-7xl leading-tight font-extrabold tracking-tight space-y-2">
              <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Authentic
              </span>
              <span className="block text-gray-900">Italian Pizza</span>
              <span className="flex items-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Delivered Hot!
                <Pizza className="w-14 h-14 ml-3 text-pizza-red animate-bounce" />
              </span>
            </h1>

            {/* description */}
            <p className="text-gray-700 text-2xl leading-relaxed max-w-2xl ">
              Experience the taste of Italy with our wood-fired pizzas made from
              the finest ingredients. Fresh dough, premium toppings, and melted
              mozzarella in every bite.
            </p>

            {/* buttons */}
            <div className="flex items-center gap-4">
              <Link
                href={"/"}
                className="h-12 px-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center justify-center"
              >
                Order Now - Free Delivery!
              </Link>

              <Button className="h-12 px-6 border border-orange-300 cursor-pointer bg-white text-orange-700 rounded-xl font-semibold shadow-sm hover:bg-orange-100 hover:text-orange-900 transition-all duration-300 ease-in-out inline-flex items-center justify-center">
                View Menu
              </Button>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center   font-semibold">
                <p className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  1000+
                </p>
                <p className="text-sm text-gray-600 capitalize">
                  Happy Customers
                </p>
              </div>

              <div className="flex flex-col items-center font-semibold">
                <p className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  25min
                </p>
                <p className="text-sm text-gray-600 capitalize">Avg Delivery</p>
              </div>

              <div className="flex flex-col items-center font-semibold">
                <p className="flex items-center gap-1 text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  4.9
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </p>
                <p className="text-sm text-gray-600 capitalize">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex-1 flex items-center justify-center h-full">
            <div className="relative w-full h-[500px] lg:h-[650px]">
              <Image
                src={"/images/hero.webp"}
                alt="hero pizza"
                fill
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />

              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2 ">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-green-700">
                  Live Orders
                </span>
              </div>

              {/* Live orders (bottom-right)  */}
              <div className="absolute -bottom-4 -right-2 lg:-right-6 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2 font-semibold">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-gray-800">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
