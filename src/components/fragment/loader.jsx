import { Skeleton } from "../ui/skeleton";

export default function Loader() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-xl  ">
      <Skeleton className="w-full h-80 bg-slate-300"></Skeleton>
      <Skeleton className="w-full h-80 bg-slate-300"></Skeleton>
      <Skeleton className="w-full h-80 bg-slate-300"></Skeleton>
      <Skeleton className="w-full h-80 bg-slate-300"></Skeleton>
      <Skeleton className="w-full h-80 bg-slate-300"></Skeleton>
      <Skeleton className="w-full h-80 bg-slate-300"></Skeleton>
      <Skeleton className="w-full h-80 bg-slate-300"></Skeleton>
      <Skeleton className="w-full h-80 bg-slate-300"></Skeleton>
    </div>
  );
}
