import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from './components/home/Home';
import Login from './components/login/Login';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      {
        path: "user",
        children: [],
      },
      {
        path: "organizer",
        children: [],
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
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App