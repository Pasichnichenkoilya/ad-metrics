import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchAdMetricsById, updateAdMetrics } from "../lib/api";
import MetricsForm from "../components/MetricsForm";
import { AdMetrics } from "../lib/types";
import { toast } from "react-toastify";
import MetricsFormSkeleton from "../components/MetricsFormSkeleton";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

export default function MetricsDetailsPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const adMetrics = useQuery({
    queryKey: ["metrics", id],
    queryFn: () => fetchAdMetricsById(id || ""),
  });

  const updateMetricsMutation = useMutation({
    mutationFn: updateAdMetrics,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["metrics", id],
      });
      toast.success("Update Successful", {
        closeOnClick: true,
        theme: "dark",
      });
    },
  });

  if (adMetrics.isLoading) {
    return <MetricsFormSkeleton />;
  }

  if (adMetrics.isError || !adMetrics.data) {
    return <p>Error</p>;
  }

  const onSubmit = (data: AdMetrics) => {
    updateMetricsMutation.mutate(data);
  };

  const data = [
    { name: "clicks", value: adMetrics.data.clicks },
    { name: "views", value: adMetrics.data.views },
    { name: "bought", value: adMetrics.data.bought },
    { name: "hovered", value: adMetrics.data.hovered },
  ];

  const renderCustomizedLabel = ({
    name,
    value,
  }: {
    name: string;
    value: number;
  }) => {
    return `${name} (${value})`;
  };

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer
        className={"aspect-[10/3] max-h-64 w-full md:aspect-[10/5]"}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            fill="#8884d8"
            label={renderCustomizedLabel}
            labelLine
          />
        </PieChart>
      </ResponsiveContainer>
      <MetricsForm
        adMetrics={adMetrics.data}
        onSubmit={onSubmit}
        isPending={updateMetricsMutation.isPending}
      />
    </div>
  );
}
