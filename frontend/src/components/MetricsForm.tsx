import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from "react-hook-form";
import { AdMetrics } from "../lib/types";
import { useState } from "react";
import MetricsTags from "./MetricsTags";

const schema = z.object({
  adName: z.string().min(1),
  clicks: z.number(),
  views: z.number(),
  bought: z.number(),
  hovered: z.number(),
});

type MetricsFormFields = z.infer<typeof schema>;

type MetricsFormProps = {
  adMetrics: AdMetrics;
  isPending: boolean;
  onSubmit: (data: AdMetrics) => void;
};

export default function MetricsForm({
  isPending,
  adMetrics,
  onSubmit,
}: MetricsFormProps) {
  const [metricsTags, setMetricsTags] = useState<string[]>(adMetrics.tags);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MetricsFormFields>({
    defaultValues: {
      adName: adMetrics.adName,
      clicks: adMetrics.clicks,
      views: adMetrics.views,
      bought: adMetrics.bought,
      hovered: adMetrics.hovered,
    },
    resolver: zodResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<MetricsFormFields> = (data) => {
    onSubmit({
      id: adMetrics.id,
      tags: metricsTags,
      ...data,
    });
  };

  const onTagDelete = (tagToDelete: string) => {
    setMetricsTags((metricsTags) =>
      metricsTags.filter((tag) => tag !== tagToDelete),
    );
  };

  const onTagCreate = (tagToCreate: string) => {
    setMetricsTags((metricsTags) => [tagToCreate, ...metricsTags]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="mx-auto flex h-full w-full max-w-lg flex-col justify-center gap-2"
    >
      <p>Name</p>
      <input
        placeholder="Enter Name"
        type="text"
        {...register("adName", {
          required: true,
        })}
        className="w-full rounded-md border-2 bg-transparent p-2 outline-none"
      />
      {errors.adName && (
        <p className="font-semibold text-red-500">{errors.adName.message}</p>
      )}

      <p>Clicks</p>
      <input
        type="number"
        min={0}
        {...register("clicks", {
          valueAsNumber: true,
          min: {
            value: 0,
            message: "Clicks amount cannot be less than 0",
          },
        })}
        className="w-full rounded-md border-2 bg-transparent p-2 outline-none"
      />
      {errors.clicks && (
        <p className="font-semibold text-red-500">{errors.clicks.message}</p>
      )}

      <p>Views</p>
      <input
        type="number"
        min={0}
        {...register("views", {
          valueAsNumber: true,
          min: {
            value: 0,
            message: "Views amount cannot be less than 0",
          },
        })}
        className="w-full rounded-md border-2 bg-transparent p-2 outline-none"
      />
      {errors.views && (
        <p className="font-semibold text-red-500">{errors.views.message}</p>
      )}

      <p>Items Bought</p>
      <input
        type="number"
        min={0}
        {...register("bought", {
          valueAsNumber: true,
          min: {
            value: 0,
            message: "Items Bought amount cannot be less than 0",
          },
        })}
        className="w-full rounded-md border-2 bg-transparent p-2 outline-none"
      />
      {errors.bought && (
        <p className="font-semibold text-red-500">{errors.bought.message}</p>
      )}

      <p>Hovered</p>
      <input
        type="number"
        min={0}
        {...register("hovered", {
          valueAsNumber: true,
          min: {
            value: 0,
            message: "Hovered amount cannot be less than 0",
          },
        })}
        className="w-full rounded-md border-2 bg-transparent p-2 outline-none"
      />
      {errors.hovered && (
        <p className="font-semibold text-red-500">{errors.hovered.message}</p>
      )}

      <p>Tags</p>
      <MetricsTags
        tags={metricsTags}
        onTagDelete={onTagDelete}
        onTagCreate={onTagCreate}
      />

      <button
        disabled={isPending}
        className="self-center rounded-md bg-slate-700 px-3 py-1 disabled:animate-pulse disabled:cursor-not-allowed"
      >
        {isPending ? "Loading" : "Submit"}
      </button>
    </form>
  );
}
