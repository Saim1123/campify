import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Packages } from "./components/sections/Packages";
import { Pricing } from "./components/sections/Pricing";
import { About } from "./components/sections/About";
import { Button } from "./components/ui/Button"; // For CTA at bottom

function App() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100 selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Packages />
        <Pricing />
        <About />
        
        {/* Final CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/10" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Ready for your adventure?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Download the Campify app today and start exploring the world's most beautiful landscapes.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-none">
                App Store
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800">
                Google Play
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;