import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import TimelinePage from "./pages/Timeline.jsx";
import StatsPage from "./pages/Stats.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import FriendDetails from "./components/FriendDetails.jsx";
import FriendContextProvider from "./context/FriendContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/timeline",
        element: <TimelinePage />,
      },
      {
        path: "/stats",
        element: <StatsPage />,
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader: () => fetch("/peopleData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendContextProvider>
      <RouterProvider router={router} />
    </FriendContextProvider>
  </StrictMode>,
);
