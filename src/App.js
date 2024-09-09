import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
import Error from './Components/Error';
import Contant from './Components/Contant';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';
import Profile1 from './Components/Profile1';


  
     const DesiFood = () => {
         return (
        
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
     );
    };
    const AppRouter = createBrowserRouter([
        {
            path: "/",
            element: <DesiFood />,
            errorElement: <Error />,
            children : [
                {
                    path: "/",
                    element: <Body />,
                    
                },
                {
                    path: "/about",
                    element: <About />,
                    children : [
                        {
                            path:"profile1",
                            element: <Profile1 />,
                        },
                    ],
                    
                },
                {
                    path: "/contant",
                    element: <Contant />,
                },
                {
                    path: "/Restaurant/:resId",
                    element: <RestaurantMenu />,
                },
            ]
        },
        
       

    ])

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<RouterProvider router={AppRouter}/>);