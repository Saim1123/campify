import { Section } from "../ui/Section";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { packages } from "../../data/content";
import { CheckCircle, Users } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";

export function Packages() {
  return (
    <Section id="packages" className="relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-3 opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]" />
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Choose Your Fleet</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Whether you need a rugged 4x4 or a luxury cabin, we have the perfect vehicle for your group.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={cn(
              "relative h-full flex flex-col border-gray-800",
              pkg.popular ? "border-blue-500/50 shadow-blue-500/10" : ""
            )}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className={cn(
                "h-2 w-full absolute top-0 left-0 bg-linear-to-r",
                pkg.color
              )} />

              <div className="p-8 pb-0">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-500 ml-2">{pkg.period}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-6">
                  <Users className="w-4 h-4 mr-2" />
                  {pkg.capacity}
                </div>
                <p className="text-gray-400 text-sm italic mb-8 border-b border-gray-800 pb-8">
                  "{pkg.description}"
                </p>
              </div>

              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.popular ? "primary" : "outline"} 
                  className="w-full"
                >
                  Select Package
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
