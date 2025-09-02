import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const productivityData = [
  { month: "Jan", commits: 245, tasks: 89, reviews: 156, bugs: 23 },
  { month: "Feb", commits: 312, tasks: 94, reviews: 189, bugs: 18 },
  { month: "Mar", commits: 289, tasks: 87, reviews: 167, bugs: 31 },
  { month: "Apr", commits: 356, tasks: 102, reviews: 201, bugs: 15 },
  { month: "May", commits: 398, tasks: 118, reviews: 234, bugs: 12 },
  { month: "Jun", commits: 445, tasks: 125, reviews: 267, bugs: 9 },
];

export const ProductivityChart = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Productivity Trends</CardTitle>
        <p className="text-sm text-muted-foreground">
          6-month overview of development activities
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={productivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))"
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="commits"
              stackId="1"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.3}
              name="Commits"
            />
            <Area
              type="monotone"
              dataKey="tasks"
              stackId="1"
              stroke="hsl(var(--secondary))"
              fill="hsl(var(--secondary))"
              fillOpacity={0.3}
              name="Tasks Completed"
            />
            <Area
              type="monotone"
              dataKey="reviews"
              stackId="1"
              stroke="hsl(var(--success))"
              fill="hsl(var(--success))"
              fillOpacity={0.3}
              name="Code Reviews"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};