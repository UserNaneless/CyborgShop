import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import Header from './components/header';
import HomePage from './routes/homePage';
import BrowsePage from './routes/browsePage';


const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />
},
{
    path: "/browse",
    element: <BrowsePage />
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router} />
    </React.StrictMode>,
)
