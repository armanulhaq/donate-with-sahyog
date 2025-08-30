import Header from "@/components/Header";
import SupportCard from "@/components/SupportCard";
import SupportCardsLoader from "@/components/SupportCardLoader";
import { useEffect, useState } from "react";

export type Project = {
    id: string;
    funding_purpose: string;
    short_description: string;
    image_url: string;
    raised_amount: number;
    goal_amount: number;
    progress: number;
    active: boolean;
    area: string;
    district: string;
    state: string;
};

const SupportRegionPage = () => {
    const [projects, setProjects] = useState<Project[] | null>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const apiBase = import.meta.env
                    .VITE_API_BASE_URL as string | undefined;
                if (!apiBase) {
                    throw new Error(
                        "VITE_API_BASE_URL is not set. Please add it to client/.env"
                    );
                }
                const response = await fetch(
                    `${apiBase}/api/donation-projects`
                );
                const data = await response.json();
                setProjects(data);
                console.log(data);
            } catch (error) {
                console.log(error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);
    return (
        <>
            <Header />
            <div className=" px-6 lg:px-8 pb-16 lg:pb-24 mt-30 lg:mt-40">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-3xl lg:text-6xl font-bold text-foreground mb-4">
                        Support Rural
                        <span className="text-primary block">Communities</span>
                    </h1>
                    <p className="text-sm md:text-md lg:text-xl text-foreground/90 mb-8 leading-relaxed">
                        Bridge the gap and transform lives by supporting
                        essential infrastructure projects in remote regions
                        across India. Every contribution creates lasting impact.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-7">
                    {loading ? (
                        <SupportCardsLoader />
                    ) : (
                        projects?.map((project) => (
                            <SupportCard key={project.id} project={project} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default SupportRegionPage;
