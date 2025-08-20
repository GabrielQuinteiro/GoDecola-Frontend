import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.tsx";
import HomePage from "../features/home/HomePage.tsx";

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
    }
]);