const SupportCardSkeleton = () => {
    return (
        <div className="bg-card shadow-sm rounded-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden"></div>

            <div className="p-5">
                <div className="h-6 bg-muted animate-pulse rounded mb-1 w-4/5" />

                <div className="flex items-center text-xs mb-2">
                    <div className="w-4 h-4 bg-muted animate-pulse rounded mr-1" />
                    <div className="h-3 bg-muted animate-pulse rounded w-32" />
                </div>

                <div className="text-sm mb-2 space-y-1">
                    <div className="h-4 bg-muted animate-pulse rounded w-full" />
                    <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                    <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
                </div>

                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center text-sm">
                            <div className="w-4 h-4 bg-muted animate-pulse rounded mr-1" />
                            <div className="h-4 bg-muted animate-pulse rounded w-16" />
                        </div>
                        <div className="h-4 bg-muted animate-pulse rounded w-8" />
                    </div>

                    <div className="w-full bg-muted animate-pulse rounded-full h-2 mb-3">
                        <div className="bg-muted animate-pulse h-2 rounded-full w-1/4" />
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="text-sm">
                            <div className="h-4 bg-muted animate-pulse rounded w-20" />
                        </div>
                        <div className="text-sm">
                            <div className="h-4 bg-muted animate-pulse rounded w-20" />
                        </div>
                    </div>
                </div>

                <div className="w-full bg-muted animate-pulse font-medium py-2 px-4 rounded-sm h-10" />
            </div>
        </div>
    );
};

export default SupportCardSkeleton;
