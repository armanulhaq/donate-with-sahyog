import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <XCircle className="text-red-500 w-20 h-20 mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">
                Payment Failed
            </h1>
            <p className="text-muted-foreground mb-6">
                Something went wrong while processing your payment. Please try
                again.
            </p>

            <div className="flex gap-4">
                <Button
                    onClick={() => navigate("/needs-your-support")}
                    className="bg-primary text-white cursor-pointer"
                >
                    Try Again
                </Button>
                <Button
                    variant="outline"
                    onClick={() => navigate("/")}
                    className="cursor-pointer"
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

export default PaymentFailure;
