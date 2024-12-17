import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "./Context/ThemeContext";
import Login from "./Pages/IniciarSecion/Login";

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
    element: <Login/>,
  },
  {
    path: "/Registrase",
    element: <></>,
  }
 
 
]);


function App() {
  return (
    <div>
      <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;