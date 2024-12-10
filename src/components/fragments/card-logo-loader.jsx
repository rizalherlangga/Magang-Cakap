import { Skeleton } from "../ui/skeleton";

export default function CardLogoLoader() {
  return (
    <div className=" flex flex-wrap gap-6 pt-6">
      <Skeleton className="w-24 h-24 bg-slate-300"></Skeleton>
      <Skeleton className="w-24 h-24 bg-slate-300"></Skeleton>
      <Skeleton className="w-24 h-24 bg-slate-300"></Skeleton>
    </div>
  );
}
