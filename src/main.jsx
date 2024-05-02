import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import NewRouter from './Router.jsx'
import Authprovider from './Provider/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={NewRouter}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
