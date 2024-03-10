import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import Content from "./views/Content.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/content",
    element: <Content />,
  },

]);

import App from './App.tsx'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />, // TODO: hey guy, make an error page
  },

  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },


]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
