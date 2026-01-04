import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { pricing, longRoutes } from "../../data/content";
import { Calendar, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-gray-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Transparent Pricing</h2>
        <p className="text-gray-400 text-lg">No hidden charges. Customize your trip according to your budget.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {pricing.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="flex flex-col justify-between p-6 bg-gray-900/40 border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">{item.type}</h3>
                <span className="text-blue-400 font-bold">{item.price}</span>
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {item.unit}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Popular Long Route Packages</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {longRoutes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex justify-between items-center p-6 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              <div>
                <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{item.route}</h4>
                <p className="text-sm text-gray-500">{item.duration}</p>
              </div>
              <div className="flex items-center">
                 <span className="font-bold text-emerald-400 mr-4">{item.price}</span>
                 <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
