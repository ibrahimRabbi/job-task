import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Layout from "./layout/Layout"
import Home from "./home/Home"
import Location from "./location/Location"
import StepLayout from "./layout/StepLayout"
import Details from "./parcelDetails/Details"
import DatePlace from "./DatePlace/DatePlace"
 

function App() {
  const queryClient = new QueryClient()
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
              element: <Details/>
            },
            {
              path: 'date',
              element:<DatePlace/>
            }
          ]
        }
      ]
     }
  ])
  

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
   </QueryClientProvider>
  )
}

export default App
