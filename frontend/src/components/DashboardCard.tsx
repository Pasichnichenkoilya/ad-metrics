import { Link } from "react-router-dom";
import { AdMetrics } from "../lib/types";

export default function DashboardCard(props: AdMetrics) {
  return (
    <div className="min-h-32 grow rounded-md bg-slate-700 p-2">
      <h1>{props.adName}</h1>
      <div className="flex gap-3">
        <div>
          <p>Hovers: {props.bought}</p>
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
