import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import Header from './components/header';
import HomePage from './routes/homePage';
import BrowsePage from './routes/browsePage';
import DetailsPage from './routes/detailsPage';
import StreamPage from './routes/streamPage';
import ProfilePage from './routes/profilePage';


const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />
},
{
    path: "/browse",
    element: <BrowsePage />
},
{
    path: "/details",
    element: <DetailsPage />
},
{
    path: "/streams",
    element: <StreamPage />
},
{
    path: "/profile",
    element: <ProfilePage />
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router} />
    </React.StrictMode>
)
