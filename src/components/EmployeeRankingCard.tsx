import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  score: number;
  trend: "up" | "down" | "stable";
  metrics: {
    commits: number;
    tasks: number;
    reviews: number;
  };
}

interface EmployeeRankingCardProps {
  title: string;
  employees: Employee[];
  type: "top" | "improvement";
}

export const EmployeeRankingCard = ({ title, employees, type }: EmployeeRankingCardProps) => {
  const getTrendIcon = (trend: Employee["trend"]) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-3 h-3 text-success" />;
      case "down":
        return <TrendingDown className="w-3 h-3 text-destructive" />;
      default:
        return <Minus className="w-3 h-3 text-muted-foreground" />;
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}
          <Badge variant={type === "top" ? "default" : "secondary"}>
            {employees.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {employees.map((employee, index) => (
          <div key={employee.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3 flex-1">
              <div className="text-sm font-medium text-muted-foreground w-6">
                #{index + 1}
              </div>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs">
                  {getInitials(employee.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground truncate">
                    {employee.name}
                  </p>
                  {getTrendIcon(employee.trend)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {employee.role} • {employee.department}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">
                  {employee.score}%
                </p>
                <div className="flex gap-1 text-xs text-muted-foreground">
                  <span>{employee.metrics.commits}c</span>
                  <span>{employee.metrics.tasks}t</span>
                  <span>{employee.metrics.reviews}r</span>
                </div>
              </div>
              <div className="w-16">
                <Progress 
                  value={employee.score} 
                  className="h-2"
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};