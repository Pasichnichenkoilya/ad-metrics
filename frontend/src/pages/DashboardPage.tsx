import { useQuery } from "@tanstack/react-query";
import { fetchAdMetrics } from "../lib/api";
import DashboardSkeleton from "../components/DashboardSkeleton";
import DashboardCard from "../components/DashboardCard";
import DashboardError from "../components/DashboardError";
import { Link, useSearchParams } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

export default function DashboardPage() {
  const adMetricsQuery = useQuery({
    queryKey: ["metrics"],
    queryFn: fetchAdMetrics,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  const name = searchParams.get("name");

  if (adMetricsQuery.isLoading) {
    return <DashboardSkeleton />;
  }

  if (adMetricsQuery.isError || !adMetricsQuery.data) {
    return <DashboardError />;
  }

  return (
    <div className="space-y-2 md:space-y-5">
      <Searchbar />
      {tag !== null && (
        <div className="mx-auto max-w-5xl">
          <button
            onClick={() => {
              searchParams.delete("tag");
              setSearchParams(searchParams, { replace: true });
            }}
            className="group flex items-center gap-1 rounded-md bg-slate-700 p-1 px-3 hover:bg-slate-600"
          >
            {tag}
            <span className="hidden pt-0.5 group-hover:block">
              <RxCross2 />
            </span>
          </button>
        </div>
      )}
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 after:grow-[10] md:gap-5">
        <Link
          to={"/metrics/create"}
          className="flex size-32 grow items-center justify-center rounded-md bg-slate-700 p-2 text-2xl hover:bg-slate-600"
        >
          <FaPlus />
        </Link>
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
