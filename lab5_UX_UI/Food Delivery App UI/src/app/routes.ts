import { createBrowserRouter } from "react-router";
import SplashScreen from "./screens/SplashScreen";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import SearchScreen from "./screens/SearchScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MapScreen from "./screens/MapScreen";

export const router = createBrowserRouter([
  { path: "/", Component: SplashScreen },
  { path: "/auth", Component: AuthScreen },
  { path: "/home", Component: HomeScreen },
  { path: "/detail", Component: DetailScreen },
  { path: "/search", Component: SearchScreen },
  { path: "/cart", Component: CartScreen },
  { path: "/profile", Component: ProfileScreen },
  { path: "/map", Component: MapScreen },
]);