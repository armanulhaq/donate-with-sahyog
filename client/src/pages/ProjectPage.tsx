import Header from "@/components/Header";
import ProjectPageSkeleton from "@/components/ProjectPageSkeleton";
import { loadStripe } from "@stripe/stripe-js";
import {
    MapPin,
    Phone,
    Mail,
    Users,
    Target,
    IndianRupee,
    HandHelping,
    Heart,
} from "lucide-react";
import { useEffect, useState, type JSX } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
    type CostItem = { item: string; amount: number };
    type FullProject = {
        id: number;
        created_at: string;
        name: string;
        area: string;
        state: string;
        district: string;
        funding_purpose: string;
        short_description: string;
        long_description: string;
        latitude: number;
        longitude: number;
        cost_breakdown: CostItem[];
        image_url: string;
        goal_amount: number;
        raised_amount: number;
        contact_person_name: string;
        contact_person_email: string;
        contact_person_phone: number;
        active: boolean;
    };

    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<FullProject | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [amount, setAmount] = useState<string>("");
    const [stripeLoading, setStripeLoading] = useState<boolean>(false);

    const handleDonate = async () => {
        // Validating amount before starting loading
        const numericAmount = parseInt(amount, 10);
        if (!numericAmount || numericAmount < 100) {
            return;
        }

        setStripeLoading(true);
        try {
            // Ensuring publishable key is configured
            const publishableKey = import.meta.env
                .VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;
            if (!publishableKey) {
                console.error(
                    "VITE_STRIPE_PUBLISHABLE_KEY is not set. Please add it to client/.env"
                );
                return;
            }

            const res = await fetch(
                "http://localhost:3000/payment/create-checkout-session",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ amount: numericAmount, project }),
                }
            );

            if (!res.ok) {
                const text = await res.text();
                throw new Error(
                    `Failed to create checkout session: ${res.status} ${text}`
                );
            }

            const data = await res.json();
            if (!data?.id) {
                throw new Error("No session id returned from server");
            }

            const stripe = await loadStripe(publishableKey);
            if (!stripe) {
                throw new Error("Failed to initialize Stripe");
            }

            await stripe.redirectToCheckout({ sessionId: data.id });
        } catch (error) {
            console.error(error);
        } finally {
            setStripeLoading(false);
        }
    };

    const fixedAmounts = [1000, 10000, 100000];

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    `http://localhost:3000/api/donation-project/${id}`
                );
                if (!res.ok) {
                    throw new Error(`Failed to load project: ${res.status}`);
                }
                const data = await res.json();
                setProject(data);
            } catch (e) {
                console.error(e);
                setProject(null);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    const formatCurrency = (amt: number) => `₹${amt.toLocaleString("en-IN")}`;

    if (isLoading) {
        return <ProjectPageSkeleton />;
    }

    if (!project) {
        return (
            <div className="min-h-screen grid place-items-center">
                <h2 className="text-2xl font-bold text-foreground">
                    Project Not Found
                </h2>
            </div>
        );
    }

    const progress =
        project.goal_amount > 0
            ? Math.min(
                  100,
                  Math.max(
                      0,
                      Math.round(
                          (Number(project.raised_amount || 0) /
                              Number(project.goal_amount || 0)) *
                              100
                      )
                  )
              )
            : 0;

    return (
        <div className="min-h-screen">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="lg:col-span-2 relative rounded-xl overflow-hidden group mb-10">
                    <img
                        src={project.image_url}
                        alt={project.funding_purpose}
                        className="w-full h-80 md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/love.png";
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                        <p className="flex items-center text-sm mb-3 opacity-90">
                            <MapPin className="h-4 w-4 mr-2" />
                            {project.area}, {project.district}, {project.state}
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">
                            {project.funding_purpose}
                        </h1>
                        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-primary text-primary-foreground">
                            <span
                                className={`w-2 h-2 rounded-full mr-2 ${
                                    project.active
                                        ? "bg-primary-foreground/90"
                                        : "bg-destructive"
                                }`}
                            />
                            {project.active
                                ? "Active Campaign"
                                : "Completed Campaign"}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-10">
                        <Section
                            title="About This Project"
                            icon={<Target className="h-5 w-5 text-primary" />}
                        >
                            <p className="text-base md:text-md text-muted-foreground leading-relaxed">
                                {project.long_description}
                            </p>
                        </Section>

                        <Section
                            title="Cost Breakdown"
                            icon={
                                <IndianRupee className="h-5 w-5 text-primary" />
                            }
                        >
                            <div className="divide-y divide-border">
                                {(Array.isArray(project.cost_breakdown)
                                    ? project.cost_breakdown
                                    : []
                                ).map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between py-3 text-foreground"
                                    >
                                        <span className="text-sm md:text-base">
                                            {item.item}
                                        </span>
                                        <span className="font-semibold text-primary">
                                            {formatCurrency(item.amount)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4 font-semibold text-foreground">
                                <span>Total Project Cost</span>
                                <span className="text-primary">
                                    {formatCurrency(project.goal_amount)}
                                </span>
                            </div>
                        </Section>

                        <Section
                            title="Get In Touch"
                            icon={<Phone className="h-5 w-5 text-primary" />}
                        >
                            <div className="space-y-4">
                                <ContactItem
                                    icon={<Users className="h-4 w-4" />}
                                    label={project.contact_person_name}
                                    subLabel="Project Lead"
                                />
                                <ContactItem
                                    icon={<Mail className="h-4 w-4" />}
                                    label={project.contact_person_email}
                                    subLabel="Email Address"
                                    link={`mailto:${project.contact_person_email}`}
                                />
                                <ContactItem
                                    icon={<Phone className="h-4 w-4" />}
                                    label={`+91 ${project.contact_person_phone}`}
                                    subLabel="Phone Number"
                                    link={`tel:${project.contact_person_phone}`}
                                />
                            </div>
                        </Section>
                    </div>

                    <div>
                        <section className="flex flex-col p-6 rounded-xl border border-border bg-card">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-full bg-secondary">
                                    <HandHelping className="h-6 w-6 text-foreground" />
                                </div>
                                <h2 className="ml-3 text-2xl font-bold text-foreground">
                                    Support This Project
                                </h2>
                            </div>

                            <div className="flex flex-col gap-6">
                                {/* Stats */}
                                <div className="p-4 rounded-lg border border-border bg-background ">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                                                <HandHelping className="h-4 w-4 text-primary" />
                                                Raised
                                            </p>
                                            <p className="text-3xl font-bold text-foreground mt-1">
                                                {formatCurrency(
                                                    project.raised_amount
                                                )}
                                            </p>
                                        </div>
                                        <div className="text-left lg:text-right">
                                            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-start lg:justify-end">
                                                <Target className="h-4 w-4 text-primary" />
                                                Goal
                                            </p>
                                            <p className="text-3xl font-bold text-foreground mt-1">
                                                {formatCurrency(
                                                    project.goal_amount
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-foreground mb-3">
                                        Quick Donate
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {fixedAmounts.map((amt) => (
                                            <button
                                                key={amt}
                                                className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border bg-secondary hover:bg-primary/20 transition cursor-pointer"
                                                type="button"
                                                onClick={() =>
                                                    setAmount(String(amt))
                                                }
                                            >
                                                <Heart className="h-4 w-4 text-primary" />
                                                <span className="font-semibold text-foreground">
                                                    {formatCurrency(amt)}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-foreground mb-3">
                                        Custom Amount (Min. ₹100)
                                    </h3>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) =>
                                            setAmount(
                                                e.target.value.replace(
                                                    /[^0-9]/g,
                                                    ""
                                                )
                                            )
                                        }
                                        placeholder="Enter amount"
                                        min="100"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground/80"
                                    />
                                    <button
                                        onClick={handleDonate}
                                        className="w-full mt-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition disabled:opacity-60"
                                        type="button"
                                        disabled={
                                            !amount ||
                                            Number.isNaN(
                                                parseInt(amount, 10)
                                            ) ||
                                            parseInt(amount, 10) < 100
                                        }
                                    >
                                        {amount &&
                                        !Number.isNaN(parseInt(amount, 10)) &&
                                        parseInt(amount, 10) >= 100
                                            ? `${
                                                  stripeLoading
                                                      ? "Processing..."
                                                      : `Donate ${formatCurrency(
                                                            parseInt(amount, 10)
                                                        )}`
                                              }`
                                            : "Enter amount to donate"}
                                    </button>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-muted-foreground">
                                            Progress
                                        </span>
                                        <span className="font-medium text-foreground">
                                            {progress}%
                                        </span>
                                    </div>
                                    <div
                                        className="h-3 w-full rounded-full bg-muted overflow-hidden"
                                        aria-hidden
                                    >
                                        <div
                                            className="h-3 rounded-full bg-primary"
                                            style={{ width: `${progress}%` }}
                                            role="progressbar"
                                            aria-valuenow={progress}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-label="Funding progress"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

const Section = ({
    title,
    icon,
    children,
}: {
    title: string;
    icon: JSX.Element;
    children: React.ReactNode;
}) => (
    <section className="space-y-4">
        <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-secondary text-foreground">
                {icon}
            </div>
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
        </div>
        <div className="p-6 rounded-xl border border-border bg-card">
            {children}
        </div>
    </section>
);

const ContactItem = ({
    icon,
    label,
    subLabel,
    link,
}: {
    icon: JSX.Element;
    label: string;
    subLabel: string;
    link?: string;
}) => (
    <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-secondary text-foreground">
            {icon}
        </div>
        <div>
            {link ? (
                <a
                    href={link}
                    className="font-medium text-foreground hover:opacity-80 transition"
                >
                    {label}
                </a>
            ) : (
                <p className="font-medium text-foreground">{label}</p>
            )}
            <p className="text-sm text-muted-foreground">{subLabel}</p>
        </div>
    </div>
);

export default ProjectPage;
