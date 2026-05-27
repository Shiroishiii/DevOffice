import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Landing from './pages/Landing'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Landing />
    
  },
  {path:"login", element:<Login/> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
