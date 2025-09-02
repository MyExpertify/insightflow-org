import { useState } from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Target, 
  Settings, 
  Download,
  GitBranch,
  MessageSquare,
  Calendar,
  Shield,
  Zap,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeView: string;
  onViewChange: (view: string) => void;
}

const navigationItems = [
  { 
    id: "overview", 
    label: "Executive Overview", 
    icon: BarChart3,
    description: "Key metrics & insights"
  },
  { 
    id: "performance", 
    label: "Team Performance", 
    icon: Users,
    description: "Individual & team metrics"
  },
  { 
    id: "productivity", 
    label: "Productivity Analytics", 
    icon: TrendingUp,
    description: "Output & efficiency tracking"
  },
  { 
    id: "improvement", 
    label: "Improvement Areas", 
    icon: Target,
    description: "Optimization opportunities"
  }
];

const dataSourceItems = [
  { id: "jira", label: "Jira", icon: Shield, status: "connected" },
  { id: "confluence", label: "Confluence", icon: MessageSquare, status: "connected" },
  { id: "bitbucket", label: "Bitbucket", icon: GitBranch, status: "connected" },
  { id: "calendar", label: "Calendar", icon: Calendar, status: "connected" },
  { id: "slack", label: "Slack", icon: Zap, status: "pending" }
];

export const DashboardLayout = ({ children, activeView, onViewChange }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar variant="floating" className="border-r border-border shadow-card">
          <SidebarContent>
            {/* Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-elegant">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Executive Hub</h2>
                  <p className="text-sm text-muted-foreground">IT Organization Dashboard</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-muted-foreground font-medium">
                Analytics & Insights
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => onViewChange(item.id)}
                        isActive={activeView === item.id}
                        className="group w-full transition-all duration-200 hover:bg-accent/50"
                      >
                        <item.icon className="w-4 h-4" />
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-xs text-muted-foreground group-hover:text-accent-foreground">
                            {item.description}
                          </span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Data Sources */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-muted-foreground font-medium">
                Data Sources
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {dataSourceItems.map((source) => (
                    <SidebarMenuItem key={source.id}>
                      <SidebarMenuButton className="group cursor-default">
                        <source.icon className="w-4 h-4" />
                        <span className="font-medium">{source.label}</span>
                        <div className={`ml-auto w-2 h-2 rounded-full ${
                          source.status === 'connected' 
                            ? 'bg-success animate-pulse-glow' 
                            : 'bg-warning'
                        }`} />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Actions */}
            <div className="mt-auto p-4 border-t border-border">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="w-4 h-4" />
                Export Reports
              </Button>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-xl font-semibold text-foreground">
                    {navigationItems.find(item => item.id === activeView)?.label || "Dashboard"}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Real-time organizational insights
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};