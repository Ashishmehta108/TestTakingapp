import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
``;
import Dashboard from "./Dashboard.tsx";
import Test from "./test.tsx";
import Navbar from "./Navbar.tsx";
import { QuizProvider } from "./context/questions.context.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/test",
    element: <Test  />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QuizProvider>
        <Navbar />
        <RouterProvider router={router} />
      </QuizProvider>
    </ThemeProvider>
  </StrictMode>
);
