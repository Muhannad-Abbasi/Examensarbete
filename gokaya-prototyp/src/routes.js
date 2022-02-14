import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/navBar';
import HomeView from './views/home/index';
import HowItWorks from './views/how-it-works';

export const routes = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'home', element: <HomeView /> },
            { path: 'how-it-works', element: <HowItWorks /> },
            // { path: 'about-us', element: <AboutUsView /> },
            // { path: 'contact', element: <ContactView /> },
            // { path: 'blogs', element: <BlogsView /> },
            // { path: '/genre/:id', element: <GenreView /> },
            { path: '/', element: <Navigate to="/home" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
]