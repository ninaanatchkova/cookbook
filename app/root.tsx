import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "./session.server";

import globalStylesUrl from "./styles/global.css";
import colorStylesUrl from "./styles/colors.css";
import spacingStylesUrl from "./styles/spacing.css";
import breakpointsStylesUrl from "./styles/breakpoints.css";
import typographyStylesUrl from "./styles/typography.css";
import { useOptionalUser, useUser } from "./utils";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: globalStylesUrl
    },
    {
      rel: "stylesheet",
      href: colorStylesUrl,
    },
    {
      rel: "stylesheet",
      href: spacingStylesUrl,
    },
    {
      rel: "stylesheet",
      href: breakpointsStylesUrl,
    },
    {
      rel: "stylesheet",
      href: typographyStylesUrl,
    }
  ]
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Cookbook",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  const user = useOptionalUser();

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=BioRhyme&family=Poppins:ital,wght@0,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body className="light-theme">
        <header className="main-header element-shadow border-bottom">
          <img src="/logo.svg" className="logo"/>
          <p className="brand text-display"><Link to=".">Cookbook</Link></p>
            {user ? (
              <form action="/logout" method="post">
                  <div className="horizontal-flex">
                  <p className="text-emphasized margin-right-tiny">{user.email}</p>
                    <button type="submit" className="ui-link-button">
                      Logout
                    </button>
                  </div>
                    
                  </form>
                  ) : (<Link to="/login" className="sign-in-link ui-link-button">Login</Link>)} 
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
