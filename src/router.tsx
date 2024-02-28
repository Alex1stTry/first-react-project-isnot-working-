import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {MoviePage} from "./pages/MoviePage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>,children:[
                    {
                        path:'info/id' , element:<MoviePage/>
                    }
                ]
            },
            {
            path:'genre/id', element:''
            }
        ]
    }
])

export {router}

