import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";
import AuthView from "../views/AuthView";
import { CreateWorkoutView } from "../views/CreateWorkoutView";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthView/>
	},
  {
    path: "/home",
    element: <HomeView/>,
	},
	{
		path: "/create",
		element: <CreateWorkoutView/>,
	},
]);