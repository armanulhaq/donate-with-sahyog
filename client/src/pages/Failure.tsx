import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[90vh] flex items-center justify-center p-6">
            <div className="max-w-3xl w-full p-10 text-center animate-fade-in">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                        <XCircle className="w-14 h-14 text-red-600" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-extrabold text-red-600 mb-4">
                    Payment Failed
                </h1>

                {/* Message */}
                <p className="text-lg text-foreground mb-4">
                    Something went wrong while processing your payment.
                </p>
                <p className="text-foreground mb-8 text-md font-semibold">
                    Please check your details and try again.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <Button
                        onClick={() => navigate("/needs-your-support")}
                        className="bg-primary hover:bg-primary/80 text-white p-6 rounded-sm text-lg font-semibold shadow-md cursor-pointer"
                    >
                        Try Again
                    </Button>
                    <Button
                        className="cursor-pointer p-6 rounded-sm text-lg font-semibold border shadow-md"
                        variant="outline"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </Button>
                </div>

                {/* Footer */}
                <div className="mt-10 text-sm text-foreground flex items-center justify-center gap-2">
                    <span>Powered by Sahyog | Together we rise</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailure;
