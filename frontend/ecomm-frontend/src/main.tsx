import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

// ignore red-squigglies here from TypeScript - it's just mad because we didn't make a type declaration for the component (and honestly i don't plan to -MWO)
import App from './App.tsx'
import Content from "./views/Content.jsx"
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    // errorElement: <ErrorPage />, // TODO: hey guy, make an error page
  },
  {
    path: "/content",
    element: <Content />,
  },
  
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
