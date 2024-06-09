import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContextApi from "../ContextApi";

export const appRouter = createBrowserRouter([
    {
        children:[
            {
                path: '/',
                element:<App/>,
            },
            {
                path: '/context',
                element: <ContextApi/>,
            },
            {
                path: '/redux',
                element: <ContextApi/>,
            }
        ],
    }
])