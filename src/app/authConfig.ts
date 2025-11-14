import type { Configuration } from "@azure/msal-browser";
import { LogLevel } from "@azure/msal-browser";

const CLIENT_ID = import.meta.env.VITE_ENTRA_CLIENT_ID as string;
const TENANT_ID = import.meta.env.VITE_ENTRA_TENANT_ID as string;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI as string;   

if (!CLIENT_ID || !TENANT_ID || !REDIRECT_URI) {
    throw new Error("Váriaveis de ambiente para autenticação não estão definidas. Verifique o arquivo .env");
}

export const msalConfig: Configuration = {
    auth: {
        clientId: CLIENT_ID,
        authority: `https://login.microsoftonline.com/${TENANT_ID}`,
        redirectUri: REDIRECT_URI,
        postLogoutRedirectUri: REDIRECT_URI,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            logLevel: LogLevel.Verbose,
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }

                if (level === LogLevel.Error || level === LogLevel.Warning) {
                    console.log(message);
                }
            },
        },
    }
};

export const loginRequest = {
    scopes: ["User.Read"],
};