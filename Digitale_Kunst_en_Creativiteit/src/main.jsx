// main.jsx
import React from 'react';
import ErrorBoundary from './pages/ErrorBoundry';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';
import PortfolioPage from './pages/PortfolioPage';
import WorkPage from './pages/WorkPage';
import AddWork from './pages/AddWork';
import { WorkDetail } from './components/WorkDetail';
import { ToastProvider } from './pages/ToastContext';
import InformationAndContactPage from './components/Contact'; 
import LogIn from './components/LoginSignIn/Login';
import Signup from './components/LoginSignIn/SignUp';
import FAQPage from './components/FAQPage';
import SettingsModal from './components/SettingPage';
import AccountInformatie from './components/AccountInformatie';


const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <ErrorBoundary><PortfolioPage /></ErrorBoundary>,
      },
      {
        path: '/work/:workId',
        element: <ErrorBoundary><WorkPage /></ErrorBoundary>,
      },
      {
        path: '/add-work-form',
        element: <ErrorBoundary><AddWork /></ErrorBoundary>,
      },
      {
        path: '/work-page/:workId',
        element: <ErrorBoundary><WorkDetail /></ErrorBoundary>,
      },
      {
        path: '/information-and-contact',
        element: <ErrorBoundary><InformationAndContactPage /></ErrorBoundary>,
      },
      {
        path: '/login',
        element: <ErrorBoundary><LogIn/></ErrorBoundary>,
      },
      {
        path: '/signup',
        element: <ErrorBoundary><Signup/></ErrorBoundary>,
      },
      {
        path: '/faq',
        element: <ErrorBoundary><FAQPage/></ErrorBoundary>,
      },
      {
        path: '/setting',
        element: <ErrorBoundary><SettingsModal/></ErrorBoundary>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ToastProvider>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
    </ToastProvider>
  </ChakraProvider>
);

export default router;
