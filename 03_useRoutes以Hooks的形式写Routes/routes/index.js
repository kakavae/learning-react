import { Navigate } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"

const routes = [
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/',
    element: <Navigate to="/about"></Navigate>
  }
]

export default routes