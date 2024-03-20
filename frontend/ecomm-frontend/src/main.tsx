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


// create a for loop to populate an array, in order to map content to be able to see the stuff; DUMMY DATA
const dummyData = [
  {
    PRD_ID: 0,
    PRD_NAME: 'Oriental Frozen Pants',
    PRD_DESCRIPTION: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    PRD_PRICE: 714.00,
    PRD_INSTOCK_QUANTITY: 6114,
    PRD_CATEGORY: 'Books',
    PRD_UPDATED_BY: 'Lee Ernser',
    PRD_CREATED_AT: '2023-10-26 08:17:44',
    PRD_UPDATED_AT: '2024-02-10 22:14:44'
  },
  {
    PRD_ID: 1,
    PRD_NAME: 'Awesome Concrete Chicken',
    PRD_DESCRIPTION: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    PRD_PRICE: 126.00,
    PRD_INSTOCK_QUANTITY: 9219,
    PRD_CATEGORY: 'Shoes',
    PRD_UPDATED_BY: 'Lillian Lockman',
    PRD_CREATED_AT: '2023-06-19 10:15:38',
    PRD_UPDATED_AT: '2023-11-07 16:06:09'
  },
  {
    PRD_ID: 2,
    PRD_NAME: 'Sleek Wooden Tuna',
    PRD_DESCRIPTION: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    PRD_PRICE: 77.00,
    PRD_INSTOCK_QUANTITY: 3272,
    PRD_CATEGORY: 'Movies',
    PRD_UPDATED_BY: 'Jody Stark',
    PRD_CREATED_AT: '2023-10-30 04:38:23',
    PRD_UPDATED_AT: '2024-02-16 22:02:48'
  },
  {
    PRD_ID: 3,
    PRD_NAME: 'Handcrafted Fresh Chicken',
    PRD_DESCRIPTION: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    PRD_PRICE: 625.00,
    PRD_INSTOCK_QUANTITY: 1161,
    PRD_CATEGORY: 'Sports',
    PRD_UPDATED_BY: 'Pearl Schamberger',
    PRD_CREATED_AT: '2023-08-02 09:29:27',
    PRD_UPDATED_AT: '2023-08-26 11:13:55'
  },
  {
    PRD_ID: 4,
    PRD_NAME: 'Small Soft Chips',
    PRD_DESCRIPTION: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    PRD_PRICE: 480.00,
    PRD_INSTOCK_QUANTITY: 3557,
    PRD_CATEGORY: 'Garden',
    PRD_UPDATED_BY: 'Lucia Lind-Yost',
    PRD_CREATED_AT: '2023-06-02 15:59:48',
    PRD_UPDATED_AT: '2023-08-08 11:06:31'
  },
  {
    PRD_ID: 5,
    PRD_NAME: 'Bespoke Plastic Shirt',
    PRD_DESCRIPTION: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    PRD_PRICE: 533.00,
    PRD_INSTOCK_QUANTITY: 7796,
    PRD_CATEGORY: 'Shoes',
    PRD_UPDATED_BY: 'Annette Okuneva',
    PRD_CREATED_AT: '2023-09-29 09:16:56',
    PRD_UPDATED_AT: '2023-11-17 14:34:12'
  },
  {
    PRD_ID: 6,
    PRD_NAME: 'Licensed Metal Hat',
    PRD_DESCRIPTION: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    PRD_PRICE: 326.00,
    PRD_INSTOCK_QUANTITY: 499,
    PRD_CATEGORY: 'Music',
    PRD_UPDATED_BY: 'Santiago Goldner',
    PRD_CREATED_AT: '2023-10-16 15:50:21',
    PRD_UPDATED_AT: '2023-10-27 13:31:22'
  },
  {
    PRD_ID: 7,
    PRD_NAME: 'Small Fresh Chips',
    PRD_DESCRIPTION: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    PRD_PRICE: 147.00,
    PRD_INSTOCK_QUANTITY: 7098,
    PRD_CATEGORY: 'Computers',
    PRD_UPDATED_BY: 'Rosemarie Schmeler',
    PRD_CREATED_AT: '2023-04-21 23:48:12',
    PRD_UPDATED_AT: '2023-09-21 08:25:27'
  },
  {
    PRD_ID: 8,
    PRD_NAME: 'Bespoke Rubber Salad',
    PRD_DESCRIPTION: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    PRD_PRICE: 463.00,
    PRD_INSTOCK_QUANTITY: 797,
    PRD_CATEGORY: 'Shoes',
    PRD_UPDATED_BY: 'Johnny Zulauf',
    PRD_CREATED_AT: '2023-04-06 03:53:35',
    PRD_UPDATED_AT: '2023-05-26 03:28:47'
  },
  {
    PRD_ID: 9,
    PRD_NAME: 'Elegant Steel Shirt',
    PRD_DESCRIPTION: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    PRD_PRICE: 601.00,
    PRD_INSTOCK_QUANTITY: 1318,
    PRD_CATEGORY: 'Garden',
    PRD_UPDATED_BY: 'Casey Wiegand',
    PRD_CREATED_AT: '2023-09-08 00:58:03',
    PRD_UPDATED_AT: '2023-09-16 05:25:33'
  }
]


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    // errorElement: <ErrorPage />, // TODO: hey guy, make an error page
  },
  {
    path: "/content",
    element: <Content dummyData={dummyData} />,
  },
  {
    path: "/item/:id",
    element: <ViewOne dummyData={dummyData} />
  },

  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
