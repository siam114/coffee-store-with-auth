import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Layout from './components/Layout';
import Home from './components/Home';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Users from './components/Users.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        loader:()=> fetch('https://5th-coffee-store-server.vercel.app/coffee')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee/>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee/>,
        loader: ({params}) => fetch(`https://5th-coffee-store-server.vercel.app/coffee/${params.id}`)
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: () => fetch('https://5th-coffee-store-server.vercel.app/users')
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
