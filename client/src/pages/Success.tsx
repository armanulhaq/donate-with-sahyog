import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const amount = queryParams.get("amount");
    const projectName = queryParams.get("project");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <CheckCircle className="text-green-500 w-20 h-20 mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">
                Payment Successful!
            </h1>
            <p className="text-muted-foreground mb-2">
                Thank you for your generous contribution.
            </p>
            {amount && (
                <p className="text-lg font-semibold text-foreground">
                    You donated ₹{amount}{" "}
                    {projectName ? `to ${projectName}` : ""}
                </p>
            )}

            <div className="flex gap-4 mt-8">
                <Button
                    onClick={() => navigate("/")}
                    className="bg-primary text-white cursor-pointer"
                >
                    Back to Home
                </Button>
                <Button
                    className="cursor-pointer"
                    variant="outline"
                    onClick={() => navigate("/needs-your-support")}
                >
                    View More Projects
                </Button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
