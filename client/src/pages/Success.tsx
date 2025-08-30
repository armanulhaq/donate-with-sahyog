import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const amount = queryParams.get("amount");
    const projectName = queryParams.get("project");
    const area = queryParams.get("area");
    const district = queryParams.get("district");
    const state = queryParams.get("state");

    return (
        <div className="min-h-[90vh] flex items-center justify-center p-6">
            <div className="max-w-3xl w-full p-10 text-center animate-fade-in">
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
                        <CheckCircle className="w-14 h-14 text-primary" />
                    </div>
                </div>

                <h1 className="text-4xl font-extrabold text-primary mb-4">
                    Payment Successful!
                </h1>
                <p className="text-lg text-foreground mb-4">
                    Thank you for your generous contribution.
                </p>

                {amount && (
                    <p className="text-foreground mb-8 text-md font-semibold">
                        You donated ₹{amount}{" "}
                        {projectName ? `to ${projectName}` : ""} in {area},{" "}
                        {district}, {state}.
                    </p>
                )}

                <div className="flex justify-center gap-4">
                    <Button
                        onClick={() => navigate("/")}
                        className="bg-primary hover:bg-primary/80 text-white p-5 lg:p-6 rounded-sm text-md lg:text-lg font-semibold shadow-md cursor-pointer"
                    >
                        Back to Home
                    </Button>
                    <Button
                        className="cursor-pointer lg:p-6 p-5 rounded-sm text-md lg:text-lg font-semibold border shadow-md"
                        variant="outline"
                        onClick={() => navigate("/needs-your-support")}
                    >
                        View More Projects
                    </Button>
                </div>

                <div className="mt-10 text-sm text-foreground flex items-center justify-center gap-2">
                    <span>Powered by Sahyog | Together we rise</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
