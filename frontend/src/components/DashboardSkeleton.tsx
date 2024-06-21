export default function DashboardSkeleton() {
  return (
    <div className="space-y-5">
      <div className="mx-auto flex h-12 w-full max-w-xl overflow-hidden rounded-md bg-slate-700"></div>
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-5 after:grow-[10]">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="min-h-32 w-64 grow animate-pulse rounded-md bg-slate-700 p-2"
          ></div>
        ))}
      </div>
    </div>
  );
}
