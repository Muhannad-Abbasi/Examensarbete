import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/navBar';
import HomeView from './views/home/index';

export const routes = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'home', element: <HomeView /> },
            // { path: 'books', element: <BooksView /> },
            // { path: 'movies', element: <MoviesView /> },
            // { path: 'books-and-movies', element: <AllView /> },
            // { path: '/genre/:id', element: <GenreView /> },
            { path: '/', element: <Navigate to="/home" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
]