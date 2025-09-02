import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Target, Clock, Users } from "lucide-react";

interface ImprovementArea {
  id: string;
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  effort: "high" | "medium" | "low";
  progress: number;
  affected: number;
  category: "process" | "technical" | "culture" | "resource";
}

const improvementAreas: ImprovementArea[] = [
  {
    id: "1",
    title: "Code Review Process",
    description: "Average review time is 3.2 days, causing delivery delays",
    impact: "high",
    effort: "medium",
    progress: 65,
    affected: 23,
    category: "process"
  },
  {
    id: "2", 
    title: "Technical Debt",
    description: "Legacy codebase requires modernization for better maintainability",
    impact: "high",
    effort: "high",
    progress: 25,
    affected: 45,
    category: "technical"
  },
  {
    id: "3",
    title: "Cross-team Communication",
    description: "Silos between frontend and backend teams affecting collaboration",
    impact: "medium",
    effort: "low",
    progress: 40,
    affected: 18,
    category: "culture"
  },
  {
    id: "4",
    title: "Testing Coverage",
    description: "Unit test coverage below 70% in critical modules",
    impact: "high",
    effort: "medium",
    progress: 55,
    affected: 12,
    category: "technical"
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "high": return "destructive";
    case "medium": return "warning";
    case "low": return "success";
    default: return "secondary";
  }
};

const getEffortColor = (effort: string) => {
  switch (effort) {
    case "high": return "destructive";
    case "medium": return "warning";
    case "low": return "success";
    default: return "secondary";
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "process": return Clock;
    case "technical": return Target;
    case "culture": return Users;
    case "resource": return AlertTriangle;
    default: return Target;
  }
};

export const ImprovementAreaCard = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-warning" />
          Areas for Improvement
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Prioritized opportunities for organizational enhancement
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {improvementAreas.map((area) => {
          const CategoryIcon = getCategoryIcon(area.category);
          return (
            <div 
              key={area.id}
              className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <CategoryIcon className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium text-foreground">{area.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {area.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant={getImpactColor(area.impact) as any} className="text-xs">
                    {area.impact} impact
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {area.effort} effort
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-medium">{area.progress}%</span>
                    <span className="text-muted-foreground">
                      ({area.affected} affected)
                    </span>
                  </div>
                </div>
                <Progress value={area.progress} className="h-2" />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};