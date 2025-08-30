import { MapPin, Target, TrendingUp } from "lucide-react";
import type { Project } from "../pages/NeedYourSupport";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const SupportCard = ({ project }: { project: Project }) => {
    const progressPercent = Math.min(
        Math.round((project.raised_amount / project.goal_amount) * 100),
        100
    );

    const formatAmount = (amount: number) => {
        return new Intl.NumberFormat("en-IN").format(amount);
    };
    const navigate = useNavigate();
    return (
        <div className="bg-card shadow-sm rounded-md  hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image_url}
                    alt={project.funding_purpose}
                    className={`w-full h-full object-cover ${
                        project.active ? "" : "grayscale"
                    }`}
                />
                <div className="absolute top-3 right-3">
                    <span
                        className={`px-2 py-1 text-xs  rounded-full ${
                            project.active
                                ? "bg-primary text-primary-foreground"
                                : "bg-gray-100 text-gray-800"
                        }`}
                    >
                        {project.active ? "Active" : "Inactive"}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <h3 className="font-bold text-lg text-card-foreground mb-1 line-clamp-2">
                    {project.funding_purpose}
                </h3>
                <div className="flex items-center text-xs mb-2 text-primary">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>
                        {project.area}, {project.district}, {project.state}
                    </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2 line-clamp-3">
                    {project.short_description}
                </p>

                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Target className="w-4 h-4 mr-1 text-primary" />
                            <span className="text-foreground">Progress</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">
                            {progressPercent}%
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>

                    {/* Amount Details */}
                    <div className="flex justify-between items-center">
                        <div className="text-sm">
                            <span className="text-gray-500">Raised: </span>
                            <span className="font-semibold text-primary">
                                {formatAmount(project.raised_amount)}
                            </span>
                        </div>
                        <div className="text-sm">
                            <span className="text-gray-500">Goal: </span>
                            <span className="font-semibold text-primary">
                                {formatAmount(project.goal_amount)}
                            </span>
                        </div>
                    </div>
                </div>

                <Button
                    onClick={() => {
                        navigate(`/project/${project.id}`);
                    }}
                    className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-sm transition-colors duration-200 flex items-center justify-center"
                >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Support Project
                </Button>
            </div>
        </div>
    );
};

export default SupportCard;
