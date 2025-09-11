import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router'
import { store } from './app/store'
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </StrictMode>,
)