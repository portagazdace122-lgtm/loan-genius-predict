import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const approvalData = [
  { name: "Approved", value: 68, color: "hsl(var(--secondary))" },
  { name: "Rejected", value: 32, color: "hsl(var(--destructive))" },
];

const factorData = [
  { factor: "Credit History", impact: 35 },
  { factor: "Income Ratio", impact: 25 },
  { factor: "Education", impact: 15 },
  { factor: "Employment", impact: 12 },
  { factor: "Property Area", impact: 8 },
  { factor: "Other", impact: 5 },
];

const monthlyData = [
  { month: "Jan", approved: 145, rejected: 68 },
  { month: "Feb", approved: 158, rejected: 72 },
  { month: "Mar", approved: 162, rejected: 65 },
  { month: "Apr", approved: 171, rejected: 70 },
  { month: "May", approved: 169, rejected: 68 },
  { month: "Jun", approved: 178, rejected: 74 },
];

export const ModelInsights = () => {
  return (
    <section id="insights" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            Model Performance & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time analytics and performance metrics from our AI prediction model
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-md h-full">
              <CardHeader>
                <CardTitle>Approval Distribution</CardTitle>
                <CardDescription>Overall loan approval rate breakdown</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={approvalData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {approvalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-md h-full">
              <CardHeader>
                <CardTitle>Feature Importance</CardTitle>
                <CardDescription>Key factors influencing predictions</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={factorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="factor" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="impact" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Monthly Trend Analysis</CardTitle>
                <CardDescription>Approved vs rejected loans over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="approved" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="rejected" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
