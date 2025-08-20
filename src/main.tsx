import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router'
import { store } from './app/store'
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { AppThemeProvider } from './AppThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
        {/* Nosso provedor de tema customizado */}
        <AppThemeProvider>
          {/* Provedor de Rotas que renderiza a aplicação */}
          <RouterProvider router={router} />
        </AppThemeProvider>
      </ReduxProvider>
  </StrictMode>,
)
