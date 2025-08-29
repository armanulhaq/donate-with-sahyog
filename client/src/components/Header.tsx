import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
    const { isAuthenticated } = useAuth0();
    return (
        <header className="w-full py-6 fixed top-0 z-50 backdrop-blur-lg bg-background text-foreground flex justify-between">
            <div className="min-w-7xl flex justify-between mx-auto px-4 sm:px-6 lg:px-8 items-center space-x-3">
                <div className="flex items-center">
                    <Link to="/" className="flex space-x-3">
                        <img
                            src="/love.png"
                            alt="Sahyog Icon"
                            width={30}
                            height={30}
                        />
                        <span className="text-lg font-semibold">Sahyog</span>
                    </Link>
                </div>
                <div className="flex items-center space-x-3">
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
