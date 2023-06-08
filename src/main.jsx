import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import AuthProbider from './providers/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <AuthProbider>
    <RouterProvider router={router} />

    </AuthProbider>
</div>
  </React.StrictMode>,
)
