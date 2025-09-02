import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Star, Award, Target } from "lucide-react";

const teamPerformanceData = [
  { name: "Frontend", performance: 88, members: 12, velocity: 85 },
  { name: "Backend", performance: 92, members: 15, velocity: 90 },
  { name: "DevOps", performance: 95, members: 8, velocity: 88 },
  { name: "Mobile", performance: 79, members: 10, velocity: 75 },
  { name: "QA", performance: 86, members: 6, velocity: 82 }
];

const skillDistribution = [
  { name: "Expert", value: 15, color: "hsl(var(--success))" },
  { name: "Advanced", value: 28, color: "hsl(var(--primary))" },
  { name: "Intermediate", value: 32, color: "hsl(var(--warning))" },
  { name: "Beginner", value: 25, color: "hsl(var(--destructive))" }
];

const individualMetrics = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Developer", 
    department: "Frontend",
    kpis: {
      velocity: 94,
      quality: 96,
      collaboration: 89,
      growth: 87
    },
    achievements: ["Top Performer Q2", "Mentor Award"],
    trend: "up"
  },
  {
    id: "2",
    name: "Marcus Rodriguez", 
    role: "Tech Lead",
    department: "Backend",
    kpis: {
      velocity: 88,
      quality: 98,
      collaboration: 95,
      growth: 82
    },
    achievements: ["Architecture Excellence", "Leadership Award"],
    trend: "up"
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "DevOps Engineer",
    department: "Infrastructure", 
    kpis: {
      velocity: 92,
      quality: 94,
      collaboration: 91,
      growth: 89
    },
    achievements: ["Innovation Award"],
    trend: "stable"
  }
];

export const PerformanceDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Overall Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground mb-2">88.4%</div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-sm text-success">+6.2% vs last quarter</span>
            </div>
            <Progress value={88.4} className="mt-3" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Goal Achievement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground mb-2">92%</div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-sm text-success">Exceeding targets</span>
            </div>
            <Progress value={92} className="mt-3" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground mb-2">15</div>
            <div className="text-sm text-muted-foreground">
              Employees with 90+ scores
            </div>
            <Progress value={75} className="mt-3" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="teams" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="teams">Team Performance</TabsTrigger>
          <TabsTrigger value="individuals">Individual Metrics</TabsTrigger>
          <TabsTrigger value="skills">Skill Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="teams">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Performance Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={teamPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Bar dataKey="performance" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamPerformanceData.map((team, index) => (
                  <div key={team.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div>
                      <h4 className="font-medium">{team.name}</h4>
                      <p className="text-sm text-muted-foreground">{team.members} members</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{team.performance}%</div>
                      <div className="text-xs text-muted-foreground">Velocity: {team.velocity}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="individuals">
          <div className="space-y-4">
            {individualMetrics.map((person) => (
              <Card key={person.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{person.name}</h3>
                        <p className="text-muted-foreground">{person.role} • {person.department}</p>
                        <div className="flex gap-2 mt-2">
                          {person.achievements.map((achievement, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {person.trend === "up" ? (
                        <TrendingUp className="w-5 h-5 text-success" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(person.kpis).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm capitalize text-muted-foreground">{key}</span>
                          <span className="text-sm font-medium">{value}%</span>
                        </div>
                        <Progress value={value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="skills">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Skill Level Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={skillDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {skillDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {skillDistribution.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skill Development Needs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { skill: "React/TypeScript", gap: 15, priority: "High" },
                  { skill: "Cloud Architecture", gap: 28, priority: "High" },
                  { skill: "DevOps Practices", gap: 12, priority: "Medium" },
                  { skill: "Security Best Practices", gap: 22, priority: "High" },
                  { skill: "Performance Optimization", gap: 18, priority: "Medium" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.skill}</span>
                      <Badge variant={item.priority === "High" ? "destructive" : "secondary"}>
                        {item.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={100 - item.gap} className="flex-1 h-2" />
                      <span className="text-sm text-muted-foreground">{item.gap}% gap</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};