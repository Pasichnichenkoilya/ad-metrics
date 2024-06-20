import { useQuery } from "@tanstack/react-query";
import { fetchAdMetrics } from "../lib/api";
import DashboardSkeleton from "../components/DashboardSkeleton";
import DashboardCard from "../components/DashboardCard";
import DashboardError from "../components/DashboardError";
import { useSearchParams } from "react-router-dom";
import Searchbar from "../components/Searchbar";

export default function DashboardPage() {
  const adMetricsQuery = useQuery({
    queryKey: ["adMetrics"],
    queryFn: fetchAdMetrics,
  });

  const [query] = useSearchParams();
  const tag = query.get("tag");
  const name = query.get("name");

  if (adMetricsQuery.isLoading) {
    return <DashboardSkeleton />;
  }

  if (adMetricsQuery.isError || !adMetricsQuery.data) {
    return <DashboardError />;
  }

  return (
    <div className="space-y-2 md:space-y-5">
      <Searchbar />
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 after:grow-[10] md:gap-5">
        {adMetricsQuery.data
          .filter((metrics) =>
            name
              ? metrics.adName.toLowerCase().includes(name.toLowerCase())
              : true,
          )
          .filter((metrics) => (tag ? metrics.tags.includes(tag) : true))
          .map((metrics) => (
            <DashboardCard key={metrics.id} {...metrics} />
          ))}
      </div>
    </div>
  );
}
