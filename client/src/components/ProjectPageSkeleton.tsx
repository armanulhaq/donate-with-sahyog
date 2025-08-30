import Header from "./Header";

const ProjectPageSkeleton = () => {
    return (
        <div className="min-h-screen">
            {/* Header placeholder */}
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Banner Skeleton */}
                <div className="relative  rounded-xl overflow-hidden mb-10">
                    <div className="w-full h-80 md:h-[450px] bg-card border border-gray-200 animate-pulse rounded-xl" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column: About, Cost Breakdown, Contact */}
                    <div className="space-y-10">
                        {/* About Section */}
                        <SectionSkeleton />

                        {/* Cost Breakdown Section */}
                        <SectionSkeleton>
                            <div className="space-y-3 mt-4">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between"
                                    >
                                        <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                                        <div className="h-4 w-20 bg-muted animate-pulse rounded" />
                                    </div>
                                ))}
                                <div className="flex justify-between mt-4">
                                    <div className="h-4 w-40 bg-muted animate-pulse rounded" />
                                    <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                                </div>
                            </div>
                        </SectionSkeleton>

                        {/* Contact Section */}
                        <SectionSkeleton>
                            <div className="space-y-4">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
                                        <div className="space-y-2 flex-1">
                                            <div className="h-4 w-40 bg-muted animate-pulse rounded" />
                                            <div className="h-3 w-28 bg-muted animate-pulse rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SectionSkeleton>
                    </div>

                    {/* Right Column: Support Card */}
                    <div>
                        <div className="flex flex-col p-6 rounded-xl border border-border bg-card">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
                                <div className="ml-3 h-6 w-48 bg-muted animate-pulse rounded" />
                            </div>

                            <div className="flex flex-col gap-6">
                                {/* Stats */}
                                <div className="p-4 rounded-lg border border-border bg-background space-y-3">
                                    <div className="flex justify-between">
                                        <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                                        <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="h-6 w-32 bg-muted animate-pulse rounded" />
                                        <div className="h-6 w-32 bg-muted animate-pulse rounded" />
                                    </div>
                                </div>

                                {/* Quick Donate */}
                                <div>
                                    <div className="h-4 w-32 bg-muted animate-pulse rounded mb-3" />
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {Array.from({ length: 3 }).map(
                                            (_, i) => (
                                                <div
                                                    key={i}
                                                    className="h-12 bg-muted animate-pulse rounded"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Custom Amount */}
                                <div>
                                    <div className="h-4 w-44 bg-muted animate-pulse rounded mb-3" />
                                    <div className="h-12 bg-muted animate-pulse rounded mb-4" />
                                    <div className="h-12 bg-muted animate-pulse rounded" />
                                </div>

                                {/* Progress Bar */}
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <div className="h-3 w-16 bg-muted animate-pulse rounded" />
                                        <div className="h-3 w-10 bg-muted animate-pulse rounded" />
                                    </div>
                                    <div className="w-full h-3 rounded-full bg-muted animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const SectionSkeleton = ({ children }: { children?: React.ReactNode }) => (
    <div className="space-y-4">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
            <div className="h-5 w-48 bg-muted animate-pulse rounded" />
        </div>
        <div className="p-6 rounded-xl border border-border bg-card">
            {children ? (
                children
            ) : (
                <div className="space-y-3">
                    <div className="h-4 w-full bg-muted animate-pulse rounded" />
                    <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-2/4 bg-muted animate-pulse rounded" />
                </div>
            )}
        </div>
    </div>
);

export default ProjectPageSkeleton;
