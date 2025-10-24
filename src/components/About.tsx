import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, LineChart } from "lucide-react";

const technologies = [
  { name: "React & TypeScript", icon: Code },
  { name: "Machine Learning", icon: Cpu },
  { name: "Data Analytics", icon: LineChart },
  { name: "Secure Database", icon: Database },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 md:text-4xl">
              About LoanPredict AI
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                AI-powered loan prediction using advanced machine learning to provide instant, accurate approval predictions.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Badge variant="secondary" className="px-4 py-2 text-sm flex items-center gap-2">
                      <tech.icon className="h-4 w-4" />
                      {tech.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">89%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-secondary mb-2">12K+</div>
                <div className="text-sm text-muted-foreground">Applications Processed</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">&lt;3s</div>
                <div className="text-sm text-muted-foreground">Average Response Time</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">System Availability</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
