import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../App.css";
import { About, Book, Home, Menu } from "./routes";
function Main() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/book",
      element: <Book/>,
    },
    {
      path: "/menu",
      element: <Menu/>,
    },
  ]);
  return (
    <main>
          <RouterProvider router={router} />
    </main>
  );
}

export default Main;
