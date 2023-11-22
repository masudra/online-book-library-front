import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Subjects from "../Pages/Subjects/Subjects";
import Main from "../LayOut/Main";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,{
                path:'/subjects',
                element: <Subjects></Subjects>

            }
        ]
    },
]); 
