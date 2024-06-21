import { Link } from "react-router-dom";
import { AdMetrics } from "../lib/types";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAdMetrics } from "../lib/api";
import { toast } from "react-toastify";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

export default function DashboardCard(props: AdMetrics) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const queryClient = useQueryClient();
  const deleteMetricsMutation = useMutation({
    mutationFn: deleteAdMetrics,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["metrics"],
      });
      toast.success("Delete Successful", {
        closeOnClick: true,
        theme: "dark",
      });
    },
  });

  return (
    <div className="min-h-32 grow rounded-md bg-slate-700 p-2">
      <ConfirmDialog
        title={`Delete '${props.adName}'?`}
        onCancel={() => {}}
        onConfirm={() => deleteMetricsMutation.mutate(props.id)}
        open={deleteModalOpen}
        setOpen={(open) => setDeleteModalOpen(open)}
      />
      <div className="flex items-center justify-between">
        <Link
          to={`/metrics/${props.id}`}
          className="w-fit cursor-pointer hover:underline"
        >
          {props.adName}
        </Link>
        <button
          onClick={() => setDeleteModalOpen(true)}
          className="rounded-full p-1 text-xl hover:bg-slate-600"
        >
          <MdDelete />
        </button>
      </div>
      <div className="flex gap-3">
        <div>
          <p>Hovers: {props.hovered}</p>
          <p>Clicks: {props.clicks}</p>
        </div>
        <div>
          <p>Views: {props.views}</p>
          <p>Items bought: {props.bought}</p>
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-1">
        {props.tags.map((tag) => (
          <Link
            to={`/dashboard/?tag=${tag}`}
            key={`tag-${props.id}-${tag}`}
            className="rounded-md bg-slate-600 px-2 py-0.5 hover:bg-slate-800"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
