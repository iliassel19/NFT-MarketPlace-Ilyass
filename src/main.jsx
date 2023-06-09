import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/HomePage";
import Error from "./Pages/ErrorPage";
import MarketPlace from "./Pages/MarketPlacePage";
import CreateAccount from "./Pages/CreateAccountPage";
import Rankings from "./Pages/RankingsPage";
import Root from "./Pages/RootPage";
import ConnectWallet from "./Pages/ConnectWalletPage";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/marketplace",
        element: <MarketPlace />,
      },
      {
        path: "/signin",
        element: <CreateAccount />,
      },
      {
        path: "/connect-wallet",
        element: <ConnectWallet />,
      },
      {
        path: "/rankings",
        element: <Rankings />,
      },
      {
        path: "/rankings/:id",
        element: <h2>PROFILE NUM 32432</h2>,
      },
      {
        path: "/marketplace/:id",
        element: <h2>NFT NUM 32432</h2>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <AnimatePresence mode="wait">
      <Outlet />
    </AnimatePresence>
  </RouterProvider>
);
