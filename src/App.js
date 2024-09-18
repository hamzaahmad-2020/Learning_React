import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import About from './Components/About';
import Error from './Components/Error';
import Contant from './Components/Contant';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';
import Profile1 from './Components/Profile1';
import UserContext from './Utils/UserContext';

const About = lazy(() => import('./Components/About'));
  
     const DesiFood = () => {
        const [user, setUser] = useState({
            name: "Hamza AHmad",
            email: "Hamza@Ahmad.com"
        })
         return (
        
        <>
        <UserContext.Provider
        value={{
            user:user,
            setUser:setUser,
        }} >
            <Header/>
            <Outlet/>
            <Footer/>
        </UserContext.Provider>
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
                    element: (
                    <Suspense fallback={<h1>loding.......</h1>}>
                        <About />
                    </Suspense>
                        ),
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