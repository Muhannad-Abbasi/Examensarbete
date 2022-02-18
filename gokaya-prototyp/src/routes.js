import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/navBar';
import HomeView from './views/home';
import BookingView from './views/booking-kayak';
import BlogsView from './views/blog';
import BlogDetailsView from './views/blog/blog-details';
import NotFoundPageView from './views/404-page';

export const routes = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'home', element: <HomeView /> },
            { path: 'booking-kayak', element: <BookingView /> },
            { path: 'blogs', element: <BlogsView /> },
            { path: 'blogs/:id', element: <BlogDetailsView /> },
            { path: '404', element: <NotFoundPageView /> },
            { path: '/', element: <Navigate to="/home" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
]