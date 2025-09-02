import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { OverviewDashboard } from "@/components/views/OverviewDashboard";
import { PerformanceDashboard } from "@/components/views/PerformanceDashboard";
import { ProductivityDashboard } from "@/components/views/ProductivityDashboard";
import { ImprovementDashboard } from "@/components/views/ImprovementDashboard";

const Index = () => {
  const [activeView, setActiveView] = useState("overview");

  const renderDashboard = () => {
    switch (activeView) {
      case "performance":
        return <PerformanceDashboard />;
      case "productivity":
        return <ProductivityDashboard />;
      case "improvement":
        return <ImprovementDashboard />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <DashboardLayout activeView={activeView} onViewChange={setActiveView}>
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Index;
