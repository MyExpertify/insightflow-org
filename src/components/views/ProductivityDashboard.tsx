import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar 
} from "recharts";
import { Clock, GitCommit, MessageSquare, Target, Zap, Calendar } from "lucide-react";

const velocityData = [
  { week: "W1", planned: 45, completed: 42, carryover: 3 },
  { week: "W2", planned: 48, completed: 46, carryover: 2 },
  { week: "W3", planned: 52, completed: 49, carryover: 6 },
  { week: "W4", planned: 47, completed: 45, carryover: 2 },
  { week: "W5", planned: 50, completed: 52, carryover: 0 },
  { week: "W6", planned: 55, completed: 51, carryover: 4 }
];

const codeMetrics = [
  { date: "Mon", commits: 23, reviews: 15, lines: 1240 },
  { date: "Tue", commits: 31, reviews: 18, lines: 1580 },
  { date: "Wed", commits: 28, reviews: 22, lines: 1320 },
  { date: "Thu", commits: 35, reviews: 19, lines: 1890 },
  { date: "Fri", commits: 29, reviews: 16, lines: 1150 },
  { date: "Sat", commits: 12, reviews: 8, lines: 560 },
  { date: "Sun", commits: 8, reviews: 5, lines: 340 }
];

const deliveryMetrics = [
  { month: "Jan", features: 12, bugs: 5, hotfixes: 2 },
  { month: "Feb", features: 15, bugs: 3, hotfixes: 1 },
  { month: "Mar", features: 18, bugs: 7, hotfixes: 3 },
  { month: "Apr", features: 22, bugs: 4, hotfixes: 1 },
  { month: "May", features: 25, bugs: 6, hotfixes: 2 },
  { month: "Jun", features: 28, bugs: 3, hotfixes: 1 }
];

const blockerData = [
  { type: "Code Review Delays", count: 12, avgTime: "2.3 days", impact: "High" },
  { type: "Environment Issues", count: 8, avgTime: "4.2 hours", impact: "Medium" },
  { type: "Dependency Conflicts", count: 15, avgTime: "1.5 days", impact: "Medium" },
  { type: "Unclear Requirements", count: 6, avgTime: "3.1 days", impact: "High" },
  { type: "Resource Constraints", count: 4, avgTime: "5.2 days", impact: "High" }
];

export const ProductivityDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Key Productivity Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-success/30 bg-gradient-to-br from-success/5 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Sprint Velocity</CardTitle>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-success" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">48.2</div>
            <p className="text-xs text-muted-foreground">Story points/sprint</p>
            <div className="mt-2 flex items-center gap-1">
              <Badge variant="secondary" className="text-xs">+12% vs avg</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Code Quality</CardTitle>
            <div className="flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">94.3%</div>
            <p className="text-xs text-muted-foreground">Tests passing</p>
            <div className="mt-2">
              <Progress value={94.3} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-warning/30 bg-gradient-to-br from-warning/5 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Cycle Time</CardTitle>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-warning" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">5.2</div>
            <p className="text-xs text-muted-foreground">Days avg</p>
            <div className="mt-2 flex items-center gap-1">
              <Badge variant="secondary" className="text-xs">-18% improvement</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Team Utilization</CardTitle>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-secondary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">87%</div>
            <p className="text-xs text-muted-foreground">Capacity used</p>
            <div className="mt-2">
              <Progress value={87} className="h-1" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="velocity" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="velocity">Sprint Velocity</TabsTrigger>
          <TabsTrigger value="code">Code Metrics</TabsTrigger>
          <TabsTrigger value="delivery">Delivery</TabsTrigger>
          <TabsTrigger value="blockers">Blockers</TabsTrigger>
        </TabsList>

        <TabsContent value="velocity">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Sprint Velocity Trends</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Story points planned vs completed over time
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={velocityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="planned"
                      stackId="1"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                      name="Planned"
                    />
                    <Area
                      type="monotone"
                      dataKey="completed"
                      stackId="2"
                      stroke="hsl(var(--success))"
                      fill="hsl(var(--success))"
                      fillOpacity={0.5}
                      name="Completed"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sprint Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Current Sprint</span>
                    <span className="font-medium">Sprint 24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Planned Points</span>
                    <span className="font-medium">55</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Completed</span>
                    <span className="font-medium text-success">51</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Remaining</span>
                    <span className="font-medium text-warning">4</span>
                  </div>
                  <Progress value={92.7} className="mt-2" />
                  <p className="text-xs text-muted-foreground">92.7% completion rate</p>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <h4 className="font-medium">Team Capacity</h4>
                  <div className="space-y-2">
                    {["Frontend: 85%", "Backend: 92%", "DevOps: 78%", "QA: 88%"].map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.split(':')[0]}</span>
                        <span className="font-medium">{item.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Code Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={codeMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Bar dataKey="commits" fill="hsl(var(--primary))" name="Commits" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="reviews" fill="hsl(var(--secondary))" name="Reviews" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Quality Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { metric: "Test Coverage", value: 78, target: 80, status: "warning" },
                  { metric: "Code Review Coverage", value: 95, target: 90, status: "success" },
                  { metric: "Documentation", value: 72, target: 75, status: "warning" },
                  { metric: "Technical Debt Ratio", value: 23, target: 20, status: "destructive" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.value}%</span>
                        <Badge 
                          variant={item.status === "success" ? "default" : item.status === "warning" ? "secondary" : "destructive"}
                          className="text-xs"
                        >
                          Target: {item.target}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="delivery">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Delivery Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={deliveryMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="features" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      name="Features"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="bugs" 
                      stroke="hsl(var(--destructive))" 
                      strokeWidth={3}
                      name="Bug Fixes"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="hotfixes" 
                      stroke="hsl(var(--warning))" 
                      strokeWidth={3}
                      name="Hotfixes"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivery Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-success/10">
                    <div className="text-2xl font-bold text-success">28</div>
                    <div className="text-sm text-muted-foreground">Features This Month</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">96%</div>
                    <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Release Metrics</h4>
                  {[
                    { label: "Average Lead Time", value: "8.2 days", change: "-12%" },
                    { label: "Deployment Frequency", value: "2.3/week", change: "+15%" },
                    { label: "MTTR", value: "1.4 hours", change: "-25%" },
                    { label: "Change Failure Rate", value: "2.1%", change: "-8%" }
                  ].map((metric, index) => (
                    <div key={index} className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <div className="text-right">
                        <div className="font-medium">{metric.value}</div>
                        <div className={`text-xs ${metric.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="blockers">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-warning" />
                Current Blockers & Impediments
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Issues affecting team productivity
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blockerData.map((blocker, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{blocker.type}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{blocker.count} instances</span>
                        <span>Avg resolution: {blocker.avgTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={blocker.impact === "High" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {blocker.impact} Impact
                      </Badge>
                      <div className="w-16">
                        <Progress 
                          value={blocker.impact === "High" ? 85 : 60} 
                          className="h-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};