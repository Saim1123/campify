import { motion } from "motion/react";
import { ChevronRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-[20%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto p-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300">New 2025 Fleet Available</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="block text-white mb-2">Explore Pakistan's</span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-emerald-400 to-purple-400">
              Hidden Treasures
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate adventure with our premium fleet of trekking vans. 
            From the peaks of Hunza to the coast of Gwadar, travel in comfort and style.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="message-button w-full sm:w-auto group">
              Start Your Journey 
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Packages
            </Button>
          </div>
        </motion.div>

        {/* Stats / Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
           {[
             { label: "Happy Travelers", value: "10k+" },
             { label: "Pro Guides", value: "50+" },
             { label: "Destinations", value: "100+" },
             { label: "Rating", value: "4.9/5" },
           ].map((stat, i) => (
             <div key={i}>
               <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
               <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
             </div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
