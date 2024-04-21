import {
  createBrowserRouter,
  // Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Bienvenue from "./pages/Bienvenue";
// import { AuthContext, currentUser } from "./context/AuthContext";

const App = () => {

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <div style={{ display:"flex" }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
          <Layout />
        // </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profil/>,
        },
      ],
    },
    {
      path: "/login",
      element:<Login/>,
    },
    {
      path: "/inscription",
      element:<Inscription/>
    },
    {
      path: "/bienvenue",
      element:<Bienvenue/>
    },
  ]);

  return (
    <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
