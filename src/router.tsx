import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesListPage} from "./pages/MoviesListPage";
import {MovieCardPage} from "./pages/MovieCardPage";

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
            path:'genre/id', element:''
            }
        ]
    }
])

export {router}

