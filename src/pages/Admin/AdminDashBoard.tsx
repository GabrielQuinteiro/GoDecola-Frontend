import React from 'react';
import { useMsal } from "@azure/msal-react";

export const AdminDashboard = () => {
    // Podemos usar o hook useMsal para pegar dados do usuário logado
    const { accounts } = useMsal();
    const [name, setName] = React.useState("Usuário");

    React.useEffect(() => {
        if (accounts.length > 0) {
            // accounts[0].name é o nome de exibição (ex: "Adele Vance")
            setName(accounts[0].name || "Usuário");
        }
    }, [accounts]);

    return (
        <div>
            <h1>Bem-vindo ao Dashboard, {name}!</h1>
            <p>Você só pode ver isso porque está logado.</p>
            {/* Aqui você começaria a construir seu dashboard real */}
        </div>
    );
};