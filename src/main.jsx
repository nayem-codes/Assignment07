import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import Apps from './pages/apps/Apps';
import InstallApps from './pages/installApps/InstallApps';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import Homepage from './pages/homepage/Homepage';
import { router } from './router/Router';
import CallFriendContext from './context/CallFriendProvider';
import CallFriendProvider from './context/CallFriendProvider';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <CallFriendProvider>

    <RouterProvider router={router} />
    </CallFriendProvider>
  <ToastContainer />
  </StrictMode>,
)
