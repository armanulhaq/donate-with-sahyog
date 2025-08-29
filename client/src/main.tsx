import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <Auth0Provider
                domain={import.meta.env.VITE_AUTH0_DOMAIN}
                clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
                authorizationParams={{
                    redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
                }}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <App />
                    <Toaster />
                </ThemeProvider>
            </Auth0Provider>
        </StrictMode>
    </BrowserRouter>
);
