import { Tent, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Tent className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Campify</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the beauty of Pakistan with our premium adventure-ready vehicles. 
              Safe, reliable, and comfortable journeys await.
            </p>
            <div className="flex space-x-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Van Rentals</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tour Guides</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Camping Gear</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Corporate Events</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for travel tips and exclusive offers.</p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-full"
              />
              <Button size="icon" variant="primary">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Campify. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
