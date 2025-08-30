import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
    const { isAuthenticated } = useAuth0();

    return (
        <header className="w-full py-4 fixed top-0 z-50 backdrop-blur-lg bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <img
                        src="/love.png"
                        alt="Sahyog Icon"
                        width={30}
                        height={30}
                    />
                    <span className="text-lg font-semibold">Sahyog</span>
                </Link>

                {/* Right Section */}
                <div className="flex items-center space-x-3 flex-shrink-0">
                    {!isAuthenticated && <LoginButton />}
                    {isAuthenticated && (
                        <>
                            <Profile />
                            <LogoutButton />
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
