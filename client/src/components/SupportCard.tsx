import type { Project } from "../pages/NeedYourSupport";
import { Card } from "./ui/card";

const SupportCard = ({ project }: { project: Project }) => {
    const progressPercent = Math.min(
        Math.round((project.raised_amount / project.goal_amount) * 100),
        100
    );

    return (
        <div className="max-w-md mx-auto">
            <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                    <img
                        src={project.image_url}
                        alt={project.funding_purpose}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-white/70 text-xs px-2 py-1 rounded">
                        {project.area}, {project.district}
                    </div>
                </div>

                <div className="p-4 space-y-2">
                    <h2 className="text-lg font-semibold">
                        {project.funding_purpose}
                    </h2>
                    <p className="text-gray-600">{project.short_description}</p>

                    <div className="flex justify-between text-sm font-medium mt-2">
                        <span>
                            Raised: ₹{project.raised_amount.toLocaleString()}
                        </span>
                        <span>
                            Goal: ₹{project.goal_amount.toLocaleString()}
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>

                    <div className="text-right text-xs text-gray-500 mt-1">
                        {progressPercent}% funded
                    </div>

                    <div
                        className={`mt-3 inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                            project.active
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-500"
                        }`}
                    >
                        {project.active ? "Active" : "Inactive"}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SupportCard;
