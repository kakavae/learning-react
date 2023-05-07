import { Navigate } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import News from "../pages/Home/News"

const routes = [
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/home',
    element: <Home></Home>,
    children: [
      {
        path: 'news',
        element: <News></News>
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about"></Navigate>
  }
]

export default routes