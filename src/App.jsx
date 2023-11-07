import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./home/Home"
import StepLayout from "./layout/StepLayout"
import Details from "./parcelDetails/Details"
import PickupDate from "./pickupDate/DatePlace"
import ItemPlace from "./ItemPlace/ItemPlace"
import Review from "./Review/Review"
import Payment from "./Payment/Payment"
import SignUp from "./form/Signup"
import AuthContext from "./Authentication/AuthContext"
import PrivetRoute from "./privetRoute/PrivetRoute"
import Signin from "./form/Signin"
import Dashboard from "./Dashboard/Dashboard"
import { Provider } from "react-redux"
import store from "./Redux/store"
 
 

 

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
          path: '/step',
          element: <StepLayout />,
          children: [
            {
              path: '/step',
              element: <Details />
            },
            {
              path: 'date',
              element: <PickupDate />
            },
            {
              path: 'place',
              element: <ItemPlace />
            }
          ]

        },
        {
          path: 'review',
          element: <Review />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        }
       
      ]
    },
    {
      path: '/signup',
      element: <SignUp/>
    },
    {
      path: '/signin',
      element:<Signin/>
    },
    {
      path: 'payment',
      element: <PrivetRoute><Payment /></PrivetRoute>
    },
    
  ])
  

  return (
      <AuthContext>
        <Provider store={store}>
          <RouterProvider router={router} />
         </Provider>
      </AuthContext>
  )
}

export default App


















      
        
        





