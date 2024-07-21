import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-user",
      element: <Adduser />,
    },
    {
      path: "/edit-user",
      element: <Edituser />,
    },
    {
      path: "* ",
      element: <div>Page not found</div>
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
