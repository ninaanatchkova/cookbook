

import { LinksFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import stylesUrl from "~/styles/components/nav-tabs.css";

export const links: LinksFunction = () => {
  return [{rel: "stylesheet", href: stylesUrl}];
}

export type NavTab = {
  link: string;
  text: string;
}

type NavTabsProps = {
  tabs: NavTab[];
}

export const UINavTabs = ({tabs}: NavTabsProps) => {
  const activeClassName = "nav-tab-active";
  return (
    <ul className="nav-tabs font-emphasized font-size-increased">
      {tabs.map((tab) => (
        <li key={tab.text}>
          <NavLink to={tab.link}
                  className={({ isActive }) => isActive ? activeClassName : ""}>
            {tab.text}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
