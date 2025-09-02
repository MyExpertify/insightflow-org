import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Users,
  Lightbulb,
  Zap
} from "lucide-react";

const maturityData = [
  { subject: "Agile Practices", current: 85, target: 95 },
  { subject: "DevOps", current: 72, target: 90 },
  { subject: "Code Quality", current: 88, target: 95 },
  { subject: "Testing", current: 70, target: 85 },
  { subject: "Documentation", current: 65, target: 80 },
  { subject: "Security", current: 78, target: 90 }
];

const improvementInitiatives = [
  {
    id: "1",
    title: "Automated Testing Strategy",
    description: "Implement comprehensive test automation to improve quality and reduce manual effort",
    priority: "High",
    status: "In Progress",
    progress: 65,
    impact: "Quality & Velocity",
    timeline: "3 months",
    owner: "QA Team",
    resources: 4
  },
  {
    id: "2", 
    title: "Code Review Process Enhancement",
    description: "Streamline review process with automated checks and clearer guidelines",
    priority: "High",
    status: "Planning",
    progress: 20,
    impact: "Cycle Time",
    timeline: "2 months",
    owner: "Engineering Team",
    resources: 6
  },
  {
    id: "3",
    title: "Technical Debt Reduction",
    description: "Systematic approach to reduce legacy code and improve maintainability",
    priority: "Medium",
    status: "In Progress",
    progress: 40,
    impact: "Maintainability",
    timeline: "6 months",
    owner: "Architecture Team",
    resources: 8
  },
  {
    id: "4",
    title: "Cross-team Communication",
    description: "Improve collaboration through better tooling and processes",
    priority: "Medium", 
    status: "Not Started",
    progress: 0,
    impact: "Collaboration",
    timeline: "4 months",
    owner: "Team Leads",
    resources: 3
  }
];

const benchmarkData = [
  { metric: "Deployment Frequency", current: 2.3, industry: 4.1, unit: "per week" },
  { metric: "Lead Time", current: 8.2, industry: 5.5, unit: "days" },
  { metric: "MTTR", current: 1.4, industry: 1.0, unit: "hours" },
  { metric: "Change Failure Rate", current: 2.1, industry: 1.5, unit: "%" }
];

const quickWins = [
  {
    id: "1",
    title: "Update CI/CD Pipeline",
    effort: "Low",
    impact: "Medium",
    description: "Optimize build times by 30%",
    timeframe: "1 week"
  },
  {
    id: "2",
    title: "Standardize Code Formatting",
    effort: "Low", 
    impact: "Low",
    description: "Reduce review friction",
    timeframe: "3 days"
  },
  {
    id: "3",
    title: "Documentation Templates",
    effort: "Low",
    impact: "Medium", 
    description: "Improve knowledge sharing",
    timeframe: "1 week"
  },
  {
    id: "4",
    title: "Automated Security Scans",
    effort: "Medium",
    impact: "High",
    description: "Early vulnerability detection",
    timeframe: "2 weeks"
  }
];

export const ImprovementDashboard = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "warning";
      case "Low": return "success";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "primary";
      case "Planning": return "warning";
      case "Not Started": return "secondary";
      case "Completed": return "success";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-warning/30 bg-gradient-to-br from-warning/5 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Target className="w-4 h-4 text-warning" />
              Active Initiatives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">4</div>
            <p className="text-xs text-muted-foreground">2 high priority</p>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Avg Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">41%</div>
            <p className="text-xs text-muted-foreground">Across all initiatives</p>
          </CardContent>
        </Card>

        <Card className="border-success/30 bg-gradient-to-br from-success/5 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-success" />
              Quick Wins
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">4</div>
            <p className="text-xs text-muted-foreground">Ready to implement</p>
          </CardContent>
        </Card>

        <Card className="border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-secondary" />
              Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">21</div>
            <p className="text-xs text-muted-foreground">People involved</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="initiatives" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
          <TabsTrigger value="maturity">Maturity</TabsTrigger>
          <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
          <TabsTrigger value="quickwins">Quick Wins</TabsTrigger>
        </TabsList>

        <TabsContent value="initiatives">
          <div className="space-y-4">
            {improvementInitiatives.map((initiative) => (
              <Card key={initiative.id} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{initiative.title}</h3>
                        <Badge variant={getPriorityColor(initiative.priority) as any}>
                          {initiative.priority} Priority
                        </Badge>
                        <Badge variant={getStatusColor(initiative.status) as any} className="ml-auto">
                          {initiative.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{initiative.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Impact</span>
                      <p className="font-medium">{initiative.impact}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Timeline</span>
                      <p className="font-medium">{initiative.timeline}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Owner</span>
                      <p className="font-medium">{initiative.owner}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Resources</span>
                      <p className="font-medium">{initiative.resources} people</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{initiative.progress}%</span>
                    </div>
                    <Progress value={initiative.progress} className="h-2" />
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm" variant="outline">Update Progress</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="maturity">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Organizational Maturity</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Current state vs target goals
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={maturityData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]}
                      tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Radar
                      name="Current"
                      dataKey="current"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Target"
                      dataKey="target"
                      stroke="hsl(var(--success))"
                      fill="hsl(var(--success))"
                      fillOpacity={0.1}
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maturity Gaps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {maturityData.map((item, index) => {
                  const gap = item.target - item.current;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.subject}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {item.current}% → {item.target}%
                          </span>
                          <Badge 
                            variant={gap > 15 ? "destructive" : gap > 8 ? "secondary" : "default"}
                            className="text-xs"
                          >
                            -{gap}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={(item.current / item.target) * 100} className="h-2" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="benchmarks">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Industry Benchmarks</CardTitle>
                <p className="text-sm text-muted-foreground">
                  How we compare to industry standards
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={benchmarkData.map(item => ({
                    ...item,
                    currentNorm: item.unit === "%" || item.unit === "hours" ? item.current : item.current,
                    industryNorm: item.unit === "%" || item.unit === "hours" ? item.industry : item.industry
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="metric" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                      formatter={(value, name) => [
                        `${value} ${benchmarkData.find(item => item.metric === name)?.unit || ''}`,
                        name === 'currentNorm' ? 'Our Performance' : 'Industry Average'
                      ]}
                    />
                    <Bar 
                      dataKey="currentNorm" 
                      fill="hsl(var(--primary))" 
                      name="Our Performance"
                      radius={[2, 2, 0, 0]}
                    />
                    <Bar 
                      dataKey="industryNorm" 
                      fill="hsl(var(--muted))" 
                      name="Industry Average"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benchmarkData.map((metric, index) => {
                  const isGood = metric.unit === "%" || metric.unit === "hours" || metric.unit === "days" 
                    ? metric.current <= metric.industry 
                    : metric.current >= metric.industry;
                  const difference = metric.unit === "%" || metric.unit === "hours" || metric.unit === "days"
                    ? ((metric.industry - metric.current) / metric.industry * 100)
                    : ((metric.current - metric.industry) / metric.industry * 100);
                  
                  return (
                    <div key={index} className="p-3 rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">{metric.metric}</span>
                        <Badge variant={isGood ? "default" : "destructive"} className="text-xs">
                          {isGood ? "Above Average" : "Below Average"}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Our Performance</span>
                          <p className="font-medium">{metric.current} {metric.unit}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Industry Average</span>
                          <p className="font-medium">{metric.industry} {metric.unit}</p>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        {Math.abs(difference).toFixed(1)}% {isGood ? "better than" : "behind"} industry average
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="quickwins">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickWins.map((win) => (
              <Card key={win.id} className="hover:shadow-card transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">{win.title}</h3>
                    <div className="flex gap-2">
                      <Badge 
                        variant={win.effort === "Low" ? "default" : "secondary"} 
                        className="text-xs"
                      >
                        {win.effort} Effort
                      </Badge>
                      <Badge 
                        variant={win.impact === "High" ? "default" : win.impact === "Medium" ? "secondary" : "outline"} 
                        className="text-xs"
                      >
                        {win.impact} Impact
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{win.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{win.timeframe}</span>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Zap className="w-4 h-4" />
                      Implement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};