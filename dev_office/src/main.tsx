import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import CommandCenter from './pages/CommandCenter'
import MissionLog from './pages/MissionLog'
import Profile from './pages/Profile'
import TechTree from './pages/TechTree'
import CareerPath from './pages/CareerPath'
import Settings from './pages/Settings'
import TerminalPage from './pages/TerminalPage'
import AppLayout from './layouts/AppLayout'
import AuthLayout from './layouts/AuthLayout'
import LearnPage from './pages/LearnPage'

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/cadastro', element: <Register /> },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      { path: '/centro-comando', element: <CommandCenter /> },
      { path: '/registro-missoes', element: <MissionLog /> },
      { path: '/perfil', element: <Profile /> },
      { path: '/arvore-tech', element: <TechTree /> },
      { path: '/trilha-carreira', element: <CareerPath /> },
      { path: '/configuracoes', element: <Settings /> },
      { path: '/terminal', element: <TerminalPage /> },
      { path: '/aprenda', element: <LearnPage /> },
      { path: '/command-center', element: <Navigate to="/centro-comando" replace /> },
      { path: '/mission-log', element: <Navigate to="/registro-missoes" replace /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
