import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/navBar';
import HomeView from './views/home/index';
import BookingView from './views/booking-kayak';

export const routes = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'home', element: <HomeView /> },
            { path: 'booking-kayak', element: <BookingView /> },
            // { path: 'about-us', element: <AboutUsView /> },
            // { path: 'contact', element: <ContactView /> },
            // { path: 'blogs', element: <BlogsView /> },
            // { path: '/genre/:id', element: <GenreView /> },
            { path: '/', element: <Navigate to="/home" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
]