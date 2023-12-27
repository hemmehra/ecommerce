import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/index.js'
import { Home, AboutUs, ContactUs, Shop, ProductSingle, Login } from './pages/index.js'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/about-us',
        element: <AboutUs/>
      },
      {
        path: '/contact-us',
        element: <ContactUs/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/product/:id',
        element:<ProductSingle/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  </React.StrictMode>,
)
