import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const departmentData = [
  {
    department: "Frontend",
    velocity: 85,
    quality: 92,
    collaboration: 88,
    delivery: 90
  },
  {
    department: "Backend",
    velocity: 78,
    quality: 95,
    collaboration: 82,
    delivery: 87
  },
  {
    department: "DevOps",
    velocity: 92,
    quality: 89,
    collaboration: 94,
    delivery: 96
  },
  {
    department: "QA",
    velocity: 88,
    quality: 97,
    collaboration: 91,
    delivery: 85
  },
  {
    department: "Mobile",
    velocity: 73,
    quality: 88,
    collaboration: 79,
    delivery: 82
  }
];

export const DepartmentPerformanceChart = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Department Performance</CardTitle>
        <p className="text-sm text-muted-foreground">
          Comparative analysis across teams
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={departmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="department" 
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
            <Bar 
              dataKey="velocity" 
              fill="hsl(var(--primary))" 
              name="Velocity"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="quality" 
              fill="hsl(var(--success))" 
              name="Quality"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="collaboration" 
              fill="hsl(var(--secondary))" 
              name="Collaboration"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="delivery" 
              fill="hsl(var(--warning))" 
              name="Delivery"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};