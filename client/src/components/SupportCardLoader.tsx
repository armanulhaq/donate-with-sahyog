import SupportCardSkeleton from "./SupportPageSkeleton";

const SupportCardsLoader = () => {
    // Render only the cards so parent can control grid/layout
    return (
        <>
            {Array.from({ length: 6 }).map((_, index) => (
                <SupportCardSkeleton key={index} />
            ))}
        </>
    );
};
export default SupportCardsLoader;
