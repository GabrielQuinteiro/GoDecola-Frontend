import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.tsx";
import HomePage from "../features/home/HomePage.tsx";
import { RegisterPage } from "../pages/Register";
import LoginPage from "../pages/Login/LoginPage.tsx";
import AdminLoginPage from "../components/layout/Admin/Login/AdminLoginPage.tsx";
import { ProtectedAdminLayout } from "../components/layout/Admin/ProtectedAdminLayout.tsx";
import { AdminDashboard } from "../components/layout/Admin/AdminDashBoard.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    {
        path: '/cadastro',
        element: <RegisterPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/admin/login', 
        element: <AdminLoginPage />
    },
    {
        // protege todas as rotas filhas
        path: '/admin', 
        element: <ProtectedAdminLayout />,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard />
            },
            {
                // se o usuario for para /admin, redireciona para o dashboard
                index: true, 
                element: <Navigate to="dashboard" replace />
            }
        ]
    }
]);