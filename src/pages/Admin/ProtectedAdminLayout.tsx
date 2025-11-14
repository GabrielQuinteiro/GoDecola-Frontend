import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../../app/authConfig";
import { Outlet } from "react-router-dom";

export const ProtectedAdminLayout = () => {
    
    // Componente de UI para mostrar enquanto o MSAL verifica o login
    const LoadingComponent = () => (
        <div>
            <p>Autenticando e verificando permissões...</p>
        </div>
    );

    return (
        <MsalAuthenticationTemplate 
            interactionType={InteractionType.Redirect} 
            authenticationRequest={loginRequest}
            loadingComponent={LoadingComponent}
        >
            {/* <Outlet /> renderiza a rota filha (ex: o Dashboard) */}
            <Outlet />
        </MsalAuthenticationTemplate>
    );
};