"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

type TTestimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
};

const testimonials: TTestimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Food Blogger",
    text: "The best pizza I've ever had! The wood-fired crust is perfection and the ingredients taste so fresh. Will definitely order again!",
    image: "/images/testimonial-1.webp",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Regular Customer",
    text: "Fast delivery, hot pizza, and amazing flavors. SahandPizza has become our family's go-to for pizza nights!",
    image: "/images/testimonial-2.webp",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Local Resident",
    text: "Authentic Italian taste that reminds me of my trip to Naples. The margherita pizza is absolutely divine!",
    image: "/images/testimonial-3.webp",
    rating: 5,
  },
];

const TestimonialCard = memo(
  ({ name, role, text, image, rating }: TTestimonial) => {
    return (
      <article
        key={name}
        className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl focus-within:ring-2 focus-within:ring-pizza-orange transition-all duration-200 border-t-4 border-pizza-orange"
      >
        {/* Avatar + Name + Role */}
        <div className="flex items-center mb-4 sm:mb-6">
          <Image
            src={image}
            alt={`${name} - ${role}`}
            width={80}
            height={80}
            loading="lazy"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
          />
          <div>
            <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-gray-100">
              {name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {role}
            </p>
          </div>
        </div>

        {/* Stars */}
        <div
          className="flex mb-3 sm:mb-4"
          aria-label={`Rated ${rating} out of 5`}
        >
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current"
            />
          ))}
        </div>

        {/* Quote Icon */}
        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mb-3 sm:mb-4 absolute bottom-0 right-5 opacity-60" />

        {/* Text */}
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed italic">
          &quot;{text}&quot;
        </p>
      </article>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-pizza-orange">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            Don&apos;t just take our word for it — hear from our satisfied pizza
            lovers!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
