import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.tsx";
import HomePage from "../features/home/HomePage.tsx";
import { RegisterPage } from "../pages/Register";
import LoginPage from "../pages/Login/LoginPage.tsx";
import AdminLoginPage from "../pages/AdminLogin/AdminLoginPage.tsx";

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
    }
]);