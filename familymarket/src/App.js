import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
 
]);
function App() {
  return (
    <div>
          <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;