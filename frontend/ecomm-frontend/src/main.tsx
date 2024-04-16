import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

// ignore red-squigglies here from TypeScript - it's just mad because we didn't make a type declaration for the component (and honestly i don't plan to -MWO)
import App from './App.tsx'
import Content from "./views/Content.jsx"
import ViewOne from "./views/ViewOne.jsx"
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import NewProduct from './components/NewProduct'
import UpdateProduct from './components/UpdateProduct'


import Test from "./views/Test.jsx"

// create a for loop to populate an array, in order to map content to be able to see the stuff; DUMMY DATA
const dummyData = [
  {
    prd_ID: 0,
    prd_NAME: 'Oriental Frozen Pants',
    prd_DESCRIPTION: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    prd_PRICE: 714.00,
    prd_INSTOCK_QUANTITY: 6114,
    prd_CATEGORY: 'Books',
    prd_UPDATED_BY: 'Lee Ernser',
    prd_CREATED_AT: '2023-10-26 08:17:44',
    prd_UPDATED_AT: '2024-02-10 22:14:44'
  },
  {
    prd_ID: 1,
    prd_NAME: 'Awesome Concrete Chicken',
    prd_DESCRIPTION: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    prd_PRICE: 126.00,
    prd_INSTOCK_QUANTITY: 9219,
    prd_CATEGORY: 'Shoes',
    prd_UPDATED_BY: 'Lillian Lockman',
    prd_CREATED_AT: '2023-06-19 10:15:38',
    prd_UPDATED_AT: '2023-11-07 16:06:09'
  },
  {
    prd_ID: 2,
    prd_NAME: 'Sleek Wooden Tuna',
    prd_DESCRIPTION: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    prd_PRICE: 77.00,
    prd_INSTOCK_QUANTITY: 3272,
    prd_CATEGORY: 'Movies',
    prd_UPDATED_BY: 'Jody Stark',
    prd_CREATED_AT: '2023-10-30 04:38:23',
    prd_UPDATED_AT: '2024-02-16 22:02:48'
  },
  {
    prd_ID: 3,
    prd_NAME: 'Handcrafted Fresh Chicken',
    prd_DESCRIPTION: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    prd_PRICE: 625.00,
    prd_INSTOCK_QUANTITY: 1161,
    prd_CATEGORY: 'Sports',
    prd_UPDATED_BY: 'Pearl Schamberger',
    prd_CREATED_AT: '2023-08-02 09:29:27',
    prd_UPDATED_AT: '2023-08-26 11:13:55'
  },
  {
    prd_ID: 4,
    prd_NAME: 'Small Soft Chips',
    prd_DESCRIPTION: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    prd_PRICE: 480.00,
    prd_INSTOCK_QUANTITY: 3557,
    prd_CATEGORY: 'Garden',
    prd_UPDATED_BY: 'Lucia Lind-Yost',
    prd_CREATED_AT: '2023-06-02 15:59:48',
    prd_UPDATED_AT: '2023-08-08 11:06:31'
  },
  {
    prd_ID: 5,
    prd_NAME: 'Bespoke Plastic Shirt',
    prd_DESCRIPTION: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    prd_PRICE: 533.00,
    prd_INSTOCK_QUANTITY: 7796,
    prd_CATEGORY: 'Shoes',
    prd_UPDATED_BY: 'Annette Okuneva',
    prd_CREATED_AT: '2023-09-29 09:16:56',
    prd_UPDATED_AT: '2023-11-17 14:34:12'
  },
  {
    prd_ID: 6,
    prd_NAME: 'Licensed Metal Hat',
    prd_DESCRIPTION: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    prd_PRICE: 326.00,
    prd_INSTOCK_QUANTITY: 499,
    prd_CATEGORY: 'Music',
    prd_UPDATED_BY: 'Santiago Goldner',
    prd_CREATED_AT: '2023-10-16 15:50:21',
    prd_UPDATED_AT: '2023-10-27 13:31:22'
  },
  {
    prd_ID: 7,
    prd_NAME: 'Small Fresh Chips',
    prd_DESCRIPTION: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    prd_PRICE: 147.00,
    prd_INSTOCK_QUANTITY: 7098,
    prd_CATEGORY: 'Computers',
    prd_UPDATED_BY: 'Rosemarie Schmeler',
    prd_CREATED_AT: '2023-04-21 23:48:12',
    prd_UPDATED_AT: '2023-09-21 08:25:27'
  },
  {
    prd_ID: 8,
    prd_NAME: 'Bespoke Rubber Salad',
    prd_DESCRIPTION: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    prd_PRICE: 463.00,
    prd_INSTOCK_QUANTITY: 797,
    prd_CATEGORY: 'Shoes',
    prd_UPDATED_BY: 'Johnny Zulauf',
    prd_CREATED_AT: '2023-04-06 03:53:35',
    prd_UPDATED_AT: '2023-05-26 03:28:47'
  },
  {
    prd_ID: 9,
    prd_NAME: 'Elegant Steel Shirt',
    prd_DESCRIPTION: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    prd_PRICE: 601.00,
    prd_INSTOCK_QUANTITY: 1318,
    prd_CATEGORY: 'Garden',
    prd_UPDATED_BY: 'Casey Wiegand',
    prd_CREATED_AT: '2023-09-08 00:58:03',
    prd_UPDATED_AT: '2023-09-16 05:25:33'
  }
]

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />
  //   // errorElement: <ErrorPage />, // TODO: hey guy, make an error page
  // },
  {
    path: "/",
    element: <Content dummyData={dummyData} />,
  },
  {
    path: "/item/:id",
    element: <ViewOne dummyData={dummyData} />
  },
  {
    path: "/newProduct",
    element: <NewProduct />
  },
  {
    path: "/editProduct/:id",
    element: <UpdateProduct />
  },

  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },

  { path: "/test", element: <Test /> },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)