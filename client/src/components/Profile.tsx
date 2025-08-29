import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className="flex items-center gap-3">
                <img
                    className="w-8 h-8 rounded-full"
                    src={user?.picture || ""}
                    alt="User Image"
                />
                <p className="text-muted-foreground text-sm">
                    Hi, {user?.name?.split(" ")[0]}
                </p>
            </div>
        )
    );
};

export default Profile;
