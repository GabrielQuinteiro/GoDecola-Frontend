import React from 'react';
import { useMsal } from "@azure/msal-react";

export const AdminDashboard = () => {

    const { accounts } = useMsal();
    const [name, setName] = React.useState("Usuário");

    React.useEffect(() => {
        if (accounts.length > 0) {
            setName(accounts[0].name || "Usuário");
        }
    }, [accounts]);

    return (
        <div>
            <h1>Bem-vindo ao Dashboard, {name}!</h1>
            <p>Você só pode ver isso porque está logado.</p>
        </div>
    );
};