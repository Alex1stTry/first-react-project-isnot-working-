import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesListPage} from "./pages/MoviesListPage";
import {MovieCardPage} from "./pages/MovieCardPage";
import {GenresPage} from "./pages/GenresPage";
import {GenrePage} from "./pages/GenrePage";
import React from "react";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesListPage/>
            },
            {
                path:'movies/:id' , element:<MovieCardPage/>
            },
            {
             path:'genres', element:<GenresPage/>, children:[

                    {
                        path:'/genres/:id', element:<GenrePage/>
                    }
                ]
            }

        ]
    }
])

export {router}

