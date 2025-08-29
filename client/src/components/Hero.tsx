import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
    const navigate = useNavigate();
    const { user, loginWithRedirect } = useAuth0();
    return (
        <section className="py-30 xl:py-50 flex flex-col items-center justify-center px-10">
            <div className="grid xl:grid-cols-2 gap-12 items-center max-w-7xl">
                <div className="space-y-3">
                    <div className="bg-card border border-primary text-sm md:text-md font-sm w-fit xl:px-4 px-2 py-1 rounded-xl">
                        🇮🇳 Empowering Every Corner
                    </div>

                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
                        <span className="text-foreground">Bridge the Gap.</span>
                        <br />
                        <span className="text-primary">Transform Lives.</span>
                    </h1>

                    <p className="text-md md:text-lg text-foreground leading-relaxed">
                        Sahyog connects generous hearts with remote regions
                        across India. Fund essential amenities like clean water,
                        solar lighting, schools, and sanitation through
                        transparent, secure donations that create lasting
                        impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <Button
                            onClick={() => {
                                if (user) navigate("/needs-your-support");
                                else loginWithRedirect();
                            }}
                            size="lg"
                            className="bg-primary text-white text-lg px-8 py-6 hover:bg-primary/90 duration-300 cursor-pointer rounded-sm"
                        >
                            Fund a Cause
                        </Button>
                    </div>

                    <div className="flex items-center space-x-8 pt-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                                50+
                            </div>
                            <div className="text-sm text-foreground">
                                Villages Funded
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                                ₹2.5Cr+
                            </div>
                            <div className="text-sm text-foreground">
                                Total Donations
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                                50k+
                            </div>
                            <div className="text-sm text-foreground">
                                Lives Impacted
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        src="https://images.pexels.com/photos/3079978/pexels-photo-3079978.jpeg"
                        alt="Indian village children"
                        className="w-full h-[500px] object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
