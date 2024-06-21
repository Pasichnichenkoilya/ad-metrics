import { Link } from "react-router-dom";
import { AdMetrics } from "../lib/types";
import { MdDelete } from "react-icons/md";

export default function DashboardCard(props: AdMetrics) {
  return (
    <div className="group relative min-h-32 grow rounded-md bg-slate-700 p-2">
      <button className="invisible absolute right-1 top-1 rounded-full p-1 text-xl hover:bg-slate-600 group-hover:visible">
        <MdDelete />
      </button>
      <Link
        to={`/metrics/${props.id}`}
        className="w-fit cursor-pointer hover:underline"
      >
        {props.adName}
      </Link>
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
