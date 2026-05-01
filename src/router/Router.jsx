import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Apps from "../pages/apps/Apps";
import Homepage from "../pages/homepage/Homepage";
import InstallApps from "../pages/installApps/InstallApps";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          element: <Homepage/>,
          loader: ()=> fetch("/data.json")
        },
        {
          path: "/apps",
          element: <Apps/>,
        },
        {
            path:  "/apps/:id",
            element: <FriendDetails/>
        },
        {
          path: "/installApps",
          element: <InstallApps/>
        }
      ],
      errorElement: <NotFoundPage/>
    }, 
    
  ]
)