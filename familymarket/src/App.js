import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "./Context/ThemeContext";
import Login from "./Pages/IniciarSecion/Login";
import { AuthProvider } from "./Context/AuthContext";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import User from "./Pages/User/User";

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
    path: "/Registrarse",
    element: <Register/>,
  },
  {
    path: "/MiPerfil",
    element: <User/>,
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