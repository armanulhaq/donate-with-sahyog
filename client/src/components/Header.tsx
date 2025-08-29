import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full fixed top-0 z-50 backdrop-blur-lg bg-background text-foreground ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-3">
                    <img
                        src="/love.png"
                        alt="Sahyog Icon"
                        width={30}
                        height={30}
                    />
                    <span className="text-lg font-semibold">Sahyog</span>
                </Link>
            </div>
        </header>
    );
}
