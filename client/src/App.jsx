import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from './components/home/Home';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Events, { loader as EventsLoader } from './components/events/Events';
import EventDetail, { loader as EventDetailLoader } from './components/events/EventDetail';
// import Calendar from './components/Calendar/Calendar';
import EventManager, {loader as eventManageLoader} from './components/eventManager/EventManager';
import './App.css';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "events", element: <Events />, loader: EventsLoader },
      { path: "events/:name", element: <EventDetail />, loader: EventDetailLoader },
      {
        path: "user",
        children: [
          { path: "calendar", element: <Calendar /> },
        ],
      },
      {
        path: "organiser",
        children: [
          { path: "dashboard", element: <EventManager />, loader: eventManageLoader },
        ],
      },
    ],
  },
]);

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });
  const queryClient = useQueryClient();
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default App