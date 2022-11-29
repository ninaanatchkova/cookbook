import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import stylesUrl from "~/styles/routes/recipes.css";

export const links: LinksFunction = () => {
  return [{rel: "stylesheet", href: stylesUrl}];
};

export default function RecipesRoute() {
  return (
    <Outlet />
  )
}
