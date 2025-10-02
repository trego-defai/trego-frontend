import { Skeleton } from '@/components/ui/skeleton';

const ChatMessageSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Bot message skeleton */}
      <div className="flex gap-3 items-start">
        <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-20" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>

      {/* User message skeleton */}
      <div className="flex gap-3 items-start justify-end">
        <div className="flex flex-col gap-2 flex-1 items-end">
          <Skeleton className="h-4 w-16" />
          <div className="flex flex-col gap-2 items-end">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
        <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
      </div>

      {/* Another bot message skeleton */}
      <div className="flex gap-3 items-start">
        <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-20" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessageSkeleton;
