import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button
            onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="cursor-pointer"
        >
            <LogOut />
        </Button>
    );
};

export default LogoutButton;
