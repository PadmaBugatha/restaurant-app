import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MealsPage from "./pages/MealsPage";
import MealDetailPage from "./pages/MealDetailPage";
import CartCard from "./components/cart/CartCard";
import CartProvider from "./cartStore/CartProvider";
import ReservationsPage from "./pages/ReservationsPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/specials", element: <MealsPage /> },
      { path: "/meals/:productId", element: <MealDetailPage /> },
      { path: "/cart", element: <CartCard /> },
      { path: "/reservations", element: <ReservationsPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />;
    </CartProvider>
  );
}

export default App;
