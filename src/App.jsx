import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./home/Home"
import Location from "./location/Location"
import StepLayout from "./layout/StepLayout"
import Details from "./parcelDetails/Details"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element:<Home/>
        },
        {
          path: '/location',
          element:<Location/>
        },
        {
          path: '/step',
          element: <StepLayout />,
          children: [
            {
              path: '/step',
              element:<Details/>
            }
          ]
        }
      ]
     }
  ])
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
