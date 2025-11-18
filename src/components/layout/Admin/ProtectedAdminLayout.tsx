import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../../../app/authConfig";
import { Outlet } from "react-router-dom";
import { useHasAdminRole } from "../../../hooks/useHasAdminRole";
import React from "react";

const AccessDenied = () => (
    <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Acesso Negado</h1>
        <p>Você não tem permissão para acessar esta área.</p>
        <p>Contate o administrador para ser adicionado ao grupo `GRP_GoDecola_Admins`.</p>
    </div>
);

const RoleCheckWrapper: React.FC = () => {
    const hasAdminRole = useHasAdminRole();

    if (!hasAdminRole) {
        return <AccessDenied />;
    }

    return <Outlet />;
}

export const ProtectedAdminLayout = () => {
    
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
            <RoleCheckWrapper />
        </MsalAuthenticationTemplate>
    );
};