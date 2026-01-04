import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
       {/* Decorative blob */}
       <div className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Why Choose <span className="text-blue-500">Campify</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            We are on a mission to revolutionize travel in Pakistan. By combining technology with 
            expert local knowledge, we provide safe, comfortable, and unforgettable mobility solutions.
          </p>
          
          <div className="space-y-6 mb-10">
            {[
              "GPS-equipped vehicles with real-time tracking",
              "Certified drivers with extensive mountain experience",
              "24/7 dedicated customer support team",
              "Customized corporate retreats and team building"
            ].map((feature, i) => (
              <div key={i} className="flex items-center">
                 <div className="w-2 h-2 rounded-full bg-blue-500 mr-4" />
                 <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button variant="outline" size="lg">Learn More About Us</Button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
          <div className="relative bg-gray-900/50 border border-gray-700 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Corporate Solutions</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <h4 className="font-semibold text-blue-400 mb-1">Monthly Contracts</h4>
                <p className="text-sm text-gray-400">Reliable transportation for your employees.</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <h4 className="font-semibold text-emerald-400 mb-1">Airport Transfers</h4>
                <p className="text-sm text-gray-400">Seamless pickup and drop-off services.</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <h4 className="font-semibold text-purple-400 mb-1">Team Outings</h4>
                <p className="text-sm text-gray-400">Memorable retreats in the mountains.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
