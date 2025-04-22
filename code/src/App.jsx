import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact'
import { ErrorPage } from './Ul/ErrorPage'
import { CountryDetails } from "./components/layouts/CountryDetails"
import AppLayout from './components/layouts/AppLayout'
// Use 'router' here instead of 'route'
const router = createBrowserRouter([

  {
    path: "/",
    element:  <AppLayout/>,
    errorElement :<ErrorPage/>,
    children : [


      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />
      },
    
      {
        path: "/Contact",
        element: <Contact/>
      },

      {
        path: "/Country/:id",
        element: <CountryDetails/>
      },
    ]
  }
  
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
