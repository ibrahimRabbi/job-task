import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Layout from "./layout/Layout"
import Home from "./home/Home"
import Location from "./location/Location"
import StepLayout from "./layout/StepLayout"
import Details from "./parcelDetails/Details"
import PickupDate from "./pickupDate/DatePlace"
import ItemPlace from "./ItemPlace/ItemPlace"
import Review from "./Review/Review"
import Payment from "./Payment/Payment"

 

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
              element: <PickupDate/>
            },
            {
              path: 'place',
              element:<ItemPlace/>
            }
          ]
        },
        {
          path: 'review',
          element: <Review/> ,
        },
        {
          path: 'payment',
          element:<Payment/>
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
