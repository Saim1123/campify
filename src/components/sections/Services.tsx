import { Section } from "../ui/Section";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { services } from "../../data/content";
import { motion } from "motion/react";

export function Services() {
  return (
    <Section id="services" className="bg-gray-950">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-emerald-400">
            Premium Services
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Everything you need for a seamless adventure. We handle the logistics so you can focus on the memories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:-translate-y-2 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
