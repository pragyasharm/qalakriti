import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import ProtectedRouter from "./components/ProtectedRouter";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      errorElement: <div>Page not found</div>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          element: <ProtectedRouter />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/qalakriti",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
