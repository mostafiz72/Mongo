import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: ()=> fetch("http://localhost:5000/coffe")
  },
  {
    path: "/details/:id",
    element: <ProductView />,
    loader: ({params}) => fetch(`http://localhost:5000/coffe/${params.id}`)
  },
  {
    path: "/updates/:id",
    element: <ProductUpdate />,
    loader: ({params}) => fetch(`http://localhost:5000/coffe/${params.id}`)
  },
  {
    path: "/addcoffes",
    element: <AddCoffee />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/delete",
    element: <ProductDelete />,
  },
]);
import App from './App.jsx'
import ProductView from './Components/ProductView.jsx';
import ProductUpdate from './Components/ProductUpdate.jsx';
import ProductDelete from './Components/ProductDelete.jsx';
import AddCoffee from './AddCoffee.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
