"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  Pizza,
  MapPin,
  Phone,
  Clock,
  Mail,
  Shield,
  Truck,
  CreditCard,
  Award,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-orange-50 via-white to-yellow-50 text-gray-800 overflow-hidden border-t border-orange-200/60">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-light.svg')] bg-repeat" />

      {/* Newsletter Section */}
      <div className="relative border-b border-orange-200/60">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Stay Updated! 🍕
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get exclusive deals, new pizza launches, and sizzling offers
                straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 px-4 rounded-full bg-white/90 border border-orange-200 text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-orange-400/50 shadow-sm"
              />
              <Button className="cursor-pointer h-12 px-6 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:shadow-md transition-all duration-300 text-white font-semibold">
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-md">
                <Pizza className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Pizzaro
                </h2>
                <p className="text-sm text-gray-500">
                  Authentic Italian Since 2019
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">
              Bringing you authentic Italian pizza, baked in traditional
              wood-fired ovens with the freshest ingredients.
            </p>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-900">
                Follow Us
              </h4>
              <div className="flex justify-center md:justify-start gap-4">
                {[
                  { icon: Facebook, href: "#", color: "hover:text-blue-500" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-500" },
                  { icon: Twitter, href: "#", color: "hover:text-sky-500" },
                  { icon: Youtube, href: "#", color: "hover:text-red-500" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className={`w-11 h-11 bg-white border border-orange-200 hover:bg-orange-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 text-gray-600 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-lg text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Our Menu", href: "/menu" },
                { name: "Order Online", href: "/order" },
                { name: "Track Order", href: "/track" },
                { name: "Locations", href: "/locations" },
                { name: "Careers", href: "/careers" },
                { name: "Franchise", href: "/franchise" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-lg text-gray-900">
              Customer Care
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Help Center", href: "/help" },
                { name: "Contact Us", href: "/contact" },
                { name: "Food Safety", href: "/safety" },
                { name: "Nutrition Info", href: "/nutrition" },
                { name: "Allergen Info", href: "/allergens" },
                { name: "Feedback", href: "/feedback" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-lg text-gray-900">
              Get in Touch
            </h4>
            <div className="space-y-4 text-gray-600 text-sm">
              <div className="flex gap-3 items-start justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-red-500" />
                <div>
                  <p>123 Pizza Street</p>
                  <p className="text-gray-500">Downtown, NY 10001</p>
                </div>
              </div>
              <div className="flex gap-3 items-start justify-center md:justify-start">
                <Phone className="h-5 w-5 text-orange-500" />
                <div>
                  <p>+1 (555) 123-PIZZA</p>
                  <p className="text-gray-500">24/7 Order Hotline</p>
                </div>
              </div>
              <div className="flex gap-3 items-start justify-center md:justify-start">
                <Clock className="h-5 w-5 text-yellow-500" />
                <div>
                  <p>11AM - 11PM</p>
                  <p className="text-gray-500">Daily Delivery</p>
                </div>
              </div>
              <div className="flex gap-3 items-start justify-center md:justify-start">
                <Mail className="h-5 w-5 text-purple-500" />
                <div>
                  <p>hello@pizzaro.com</p>
                  <p className="text-gray-500">Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative border-t border-orange-200/60 bg-white/70">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
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
            ].map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-4 bg-orange-50 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-200"
              >
                <b.icon className={`h-6 w-6 ${b.color}`} />
                <p className="text-gray-900 font-medium mt-2 text-sm">
                  {b.title}
                </p>
                <p className="text-gray-500 text-xs">{b.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-orange-200/60 bg-orange-50/70">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs md:text-sm">
          <p>© 2024 Pizzaro. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-orange-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-600">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-orange-600">
              Cookie Policy
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <Heart className="h-4 w-4 text-red-500" />
            <span>Made with love in New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
