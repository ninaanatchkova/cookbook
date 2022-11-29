import { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/routes/recipes.css";

export const links: LinksFunction = () => {
  return [{rel: "stylesheet", href: stylesUrl}];
};

export default function MyRecipesRoute() {
  return (
    <div className="recipe-catalog site-content-wide">
      <h1 className="text-title margin-bottom-large">My recipes</h1>
      <ul className="recipe-list">
        {/* <li className="recipe-tile">
          <div className="recipe-tile__image">
            <img className="sized-image" src="https://images.unsplash.com/photo-1530734575165-ce39d996fbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWluZXN0cm9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"></img>
          </div>
          <h2 className="text-subtitle margin-bottom-small">Pumkin soup</h2>
          <p className="text-emphasized margin-bottom-regular">by Recipe Lover</p>
          <ul className="horizontal-flex m-dash-separator">
          <li>Soup</li>
          <li>Easy</li>
          <li>45 min</li>
        </ul>
        </li> */}
        <li className="recipe-tile">
        <div className="recipe-tile__image">
            <img className="sized-image" src="https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmF0YXRvdWlsbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"></img>
          </div>
          <h2 className="text-subtitle margin-bottom-small">Ratatouille</h2>
          <p className="text-emphasized margin-bottom-regular">by French cook</p>
          <ul className="horizontal-flex m-dash-separator">
            <li>Main</li>
            <li>Medium</li>
            <li>55 min</li>
          </ul>
        </li>
        <li className="recipe-tile">
        <div className="recipe-tile__image">
            <img className="sized-image" src="https://images.unsplash.com/photo-1515754164677-ec9796621bcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"></img>
          </div>
          <h2 className="text-subtitle margin-bottom-small">Lemon cake</h2>
          <p className="text-emphasized margin-bottom-regular">by French cook</p>
          <ul className="horizontal-flex m-dash-separator">
            <li>Dessert</li>
            <li>Easy</li>
            <li>60 min</li>
          </ul>
        </li>
        {/* <li className="recipe-tile">
        <div className="recipe-tile__image">
            <img className="sized-image" src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"></img>
          </div>
          <h2 className="text-subtitle margin-bottom-small">Roast beef with herbs</h2>
          <p className="text-emphasized margin-bottom-regular">by Stamat</p>
          <ul className="horizontal-flex m-dash-separator">
            <li>Main</li>
            <li>Medium</li>
            <li>120 min</li>
          </ul>
          </li>
          <li className="recipe-tile">
        <div className="recipe-tile__image">
            <img className="sized-image" src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"></img>
          </div>
          <h2 className="text-subtitle margin-bottom-small">Crispy fries</h2>
          <p className="text-emphasized margin-bottom-regular">by Recipe Lover</p>
          <ul className="horizontal-flex m-dash-separator">
            <li>Side</li>
            <li>Easy</li>
            <li>45 min</li>
          </ul>
          </li> */}
      </ul>
    </div>
    )
}
