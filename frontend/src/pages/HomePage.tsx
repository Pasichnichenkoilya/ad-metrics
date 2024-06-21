import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="mx-auto flex h-full max-w-3xl flex-1 flex-col items-center justify-center gap-5 p-2">
      <h1 className="text-center text-5xl">
        Monitor your ad metrics with ease!
      </h1>
      <h3 className="text-3xl">
        Monitor, analyze, and optimize your advertising campaigns with real-time
        data insights to maximize your return on investment and drive better
        results.
      </h3>
      <Link
        to="/dashboard"
        className="mt-10 rounded-md bg-slate-700 p-3 text-xl hover:bg-slate-600"
      >
        Get started!
      </Link>
    </div>
  );
}
