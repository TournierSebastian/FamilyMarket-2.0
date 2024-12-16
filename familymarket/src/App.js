import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import { ThemeProvider } from "./Context/ThemeContext";

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