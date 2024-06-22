import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultTheme } from "./Layouts/DefaultLayout";
import { Cart } from "./pages/Cart";
import { Feedback } from "./pages/Feedback";


export const router = createBrowserRouter([
  {
    element: <DefaultTheme />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/feedback',
        element: <Feedback />
      },
    ]
  },
])