import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Percent } from "lucide-react";

export const StatsOverview = () => {
  const stats = [
    {
      title: "Approval Rate",
      value: "68%",
      description: "Average approval rate",
      icon: TrendingUp,
      color: "text-success",
    },
    {
      title: "Applications",
      value: "12,450",
      description: "Total processed",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Avg. Loan Amount",
      value: "$145K",
      description: "Typical loan size",
      icon: DollarSign,
      color: "text-warning",
    },
    {
      title: "Success Rate",
      value: "89%",
      description: "Model accuracy",
      icon: Percent,
      color: "text-secondary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
