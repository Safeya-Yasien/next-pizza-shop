import { Skeleton } from "@/components/ui/skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen bg-white py-24 px-6 flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-8">
        {/* Avatar + user info skeleton */}
        <div className="bg-white rounded-3xl shadow-md p-8 flex gap-6 items-center border border-gray-100">
          <Skeleton className="h-24 w-24 rounded-full" />
          <div className="flex-1 space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-6 w-40 rounded-full" />
          </div>
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow border border-gray-100 space-y-3"
            >
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-7 w-1/4" />
            </div>
          ))}
        </div>

        {/* Status skeleton */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 text-center space-y-4">
          <Skeleton className="h-6 w-1/4 mx-auto" />
          <Skeleton className="h-4 w-1/3 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
