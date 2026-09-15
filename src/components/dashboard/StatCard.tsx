interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
}

export default function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700">
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
        {value}
      </p>

      <p className="mt-2 text-xs text-zinc-600">
        {description}
      </p>
    </div>
  );
}