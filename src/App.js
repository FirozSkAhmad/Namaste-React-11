import React, { lazy, Suspense, useState } from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import '../index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Email from "./components/Email";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "../utils/UserContext";
import DummyUserContext from "../utils/DummyUserContext";
import { Provider } from 'react-redux'
import store from "../utils/reduxStore";
import Cart from "./components/Cart";
// import InstaMart from "./components/InstaMart";

const InstaMart = lazy(() => import("./components/InstaMart"))


const App = () => {

    const [userData, setUserData] = useState({
        name: "firoz shaik",
        email: "shaik@gamil.com"
    })

    const [userData2, setUserData2] = useState({
        name: "firoz shaik2",
        email: "shaik2@gamil.com"
    })

    return (
        <Provider store={store}>
            <UserContext.Provider value={{ user: userData, setUserData: setUserData }}>
                <Header />
                <Outlet />
                <DummyUserContext.Provider value={{ userD: userData2, setUserData: setUserData2 }}>
                    <Footer />
                </DummyUserContext.Provider>
            </UserContext.Provider>
        </Provider>

    )
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/resturantMenu/:id',
                element: <ResturantMenu />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/contact',
                element: <Contact />,
                children: [
                    {
                        path: 'email',
                        element: <Email />
                    }
                ]
            },
            {
                path: '/instamart',
                element: <Suspense fallback={<h1>InstaMart Shimmer.....</h1>}><InstaMart /></Suspense>
            }
        ]
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);