import {
  Pizza,
  MapPin,
  Phone,
  Clock,
  Mail,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-6 text-center md:text-left">
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
            Authentic Italian pizza baked in wood-fired ovens with the freshest
            ingredients.
          </p>
          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-3">
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
                  aria-label={`Follow us on ${social.icon.name}`}
                  className={`w-10 h-10 bg-white border border-orange-200 rounded-full flex items-center justify-center transition hover:scale-105 text-gray-600 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Menu & Orders */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-4">
              Menu & Orders
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Our Menu", href: "/menu" },
                { name: "Order Online", href: "/order" },
                { name: "Track Order", href: "/track" },
                { name: "Locations", href: "/locations" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Info */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-4">
              Support & Info
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Careers", href: "/careers" },
                { name: "Franchise", href: "/franchise" },
                { name: "Help Center", href: "/help" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="font-semibold text-lg text-gray-900 mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex gap-3 justify-center md:justify-start">
              <MapPin className="h-5 w-5 text-red-500" />
              <span>123 Pizza Street, Downtown NY 10001</span>
            </li>
            <li className="flex gap-3 justify-center md:justify-start">
              <Phone className="h-5 w-5 text-orange-500" />
              <span>+1 (555) 123-PIZZA</span>
            </li>
            <li className="flex gap-3 justify-center md:justify-start">
              <Clock className="h-5 w-5 text-yellow-500" />
              <span>11AM - 11PM, Daily</span>
            </li>
            <li className="flex gap-3 justify-center md:justify-start">
              <Mail className="h-5 w-5 text-purple-500" />
              <span>hello@pizzaro.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-200/60 bg-orange-50/70">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs md:text-sm">
          <p>© 2024 Pizzaro. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-orange-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-600">
              Terms of Service
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
