import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../components/authComponent/Login'
import SignUp from '../components/authComponent/SignUp'
import Home from '../pages/home/Home'
import PageNotFound from '../pages/notFound/PageNotFound'

const StreamBaseRoutes = () => {

let StremRoutes = useRoutes([
    {
        path:"/",
        element:<Home />,
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"signup",
        element:<SignUp/>,
    },
    {
        path:"*",
        element:<PageNotFound/>,
    }
])

  return StremRoutes;
}

export default StreamBaseRoutes