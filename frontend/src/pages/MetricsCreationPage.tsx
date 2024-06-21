import { useMutation, useQueryClient } from "@tanstack/react-query";
import MetricsForm from "../components/MetricsForm";
import { createAdMetrics } from "../lib/api";
import { toast } from "react-toastify";
import { AdMetrics } from "../lib/types";
import { useNavigate } from "react-router-dom";

export default function MetricsCreationPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: ["metrics"],
    });
    toast.success("Creation Successful", {
      closeOnClick: true,
      theme: "dark",
    });
    navigate("/dashboard");
  };

  const onError = () => {
    toast.error("Creation Failed. Try Again", {
      closeOnClick: true,
      theme: "dark",
    });
  };

  const createMetricsMutation = useMutation({
    mutationFn: createAdMetrics,
    onSuccess: onSuccess,
    onError: onError,
  });

  const onSubmit = (data: AdMetrics) => {
    createMetricsMutation.mutate(data);
  };

  return (
    <MetricsForm
      adMetrics={{
        id: "",
        adName: "",
        bought: 0,
        clicks: 0,
        hovered: 0,
        views: 0,
        tags: [],
      }}
      onSubmit={onSubmit}
      isPending={createMetricsMutation.isPending}
    />
  );
}
