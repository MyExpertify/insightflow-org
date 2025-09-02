import { MetricCard } from "@/components/MetricCard";
import { ProductivityChart } from "@/components/charts/ProductivityChart";
import { DepartmentPerformanceChart } from "@/components/charts/DepartmentPerformanceChart";
import { EmployeeRankingCard } from "@/components/EmployeeRankingCard";
import { ImprovementAreaCard } from "@/components/ImprovementAreaCard";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Clock, 
  GitCommit, 
  Bug,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const topEmployees = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Developer",
    department: "Frontend",
    score: 96,
    trend: "up" as const,
    metrics: { commits: 87, tasks: 24, reviews: 45 }
  },
  {
    id: "2", 
    name: "Marcus Rodriguez",
    role: "Tech Lead",
    department: "Backend",
    score: 94,
    trend: "up" as const,
    metrics: { commits: 72, tasks: 18, reviews: 52 }
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "DevOps Engineer", 
    department: "Infrastructure",
    score: 92,
    trend: "stable" as const,
    metrics: { commits: 45, tasks: 31, reviews: 38 }
  },
  {
    id: "4",
    name: "David Kim",
    role: "Full Stack Developer",
    department: "Product",
    score: 89,
    trend: "up" as const,
    metrics: { commits: 68, tasks: 22, reviews: 34 }
  }
];

const improvementEmployees = [
  {
    id: "5",
    name: "Alex Johnson",
    role: "Junior Developer",
    department: "Frontend",
    score: 67,
    trend: "down" as const,
    metrics: { commits: 23, tasks: 8, reviews: 12 }
  },
  {
    id: "6",
    name: "Maria Santos",
    role: "QA Engineer",
    department: "Quality",
    score: 71,
    trend: "stable" as const,
    metrics: { commits: 15, tasks: 19, reviews: 28 }
  },
  {
    id: "7",
    name: "James Wilson",
    role: "Backend Developer",
    department: "API",
    score: 74,
    trend: "up" as const,
    metrics: { commits: 34, tasks: 12, reviews: 16 }
  }
];

export const OverviewDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Team Productivity"
          value="87%"
          subtitle="vs last month"
          icon={TrendingUp}
          trend={{ value: 12, isPositive: true }}
          variant="success"
        />
        <MetricCard
          title="Active Developers"
          value="47"
          subtitle="across 5 teams"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <MetricCard
          title="Sprint Completion"
          value="92%"
          subtitle="current sprint"
          icon={Target}
          trend={{ value: 5, isPositive: true }}
          variant="success"
        />
        <MetricCard
          title="Avg. Bug Resolution"
          value="2.3 days"
          subtitle="vs 3.1 days last month"
          icon={Clock}
          trend={{ value: 26, isPositive: true }}
          variant="success"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Weekly Commits"
          value="245"
          subtitle="this week"
          icon={GitCommit}
          trend={{ value: 15, isPositive: true }}
        />
        <MetricCard
          title="Code Reviews"
          value="89"
          subtitle="pending: 12"
          icon={CheckCircle}
          trend={{ value: 3, isPositive: false }}
          variant="warning"
        />
        <MetricCard
          title="Open Bugs"
          value="23"
          subtitle="critical: 2"
          icon={Bug}
          trend={{ value: 18, isPositive: true }}
          variant="warning"
        />
        <MetricCard
          title="Tech Debt"
          value="34%"
          subtitle="of codebase"
          icon={AlertCircle}
          trend={{ value: 7, isPositive: true }}
          variant="destructive"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductivityChart />
        <DepartmentPerformanceChart />
      </div>

      {/* Employee Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmployeeRankingCard
          title="Top Performers"
          employees={topEmployees}
          type="top"
        />
        <EmployeeRankingCard
          title="Focus Areas"
          employees={improvementEmployees}
          type="improvement"
        />
      </div>

      {/* Improvement Areas */}
      <ImprovementAreaCard />
    </div>
  );
};