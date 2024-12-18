import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "./Context/ThemeContext";
import Login from "./Pages/IniciarSecion/Login";
import { AuthProvider } from "./Context/AuthContext";
import NotFound from "./Pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/MiCarrito",
    element: <></>,
  },
  {
    path: "/IniciarSesion",
    element: <Login />,
  },
  {
    path: "/Registrase",
    element: <></>,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);


function App() {
  return (
    <div>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} ></RouterProvider>
          </AuthProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;