export default function RecipesRouteRecipeId() {
  return (
    <article className="recipe-view site-content">
      <header className="recipe-view__header">
        <h1 className="text-title text-center margin-bottom-small">Roasted beef with vegetables</h1>
        <ul className="recipe-view__classification horizontal-centered-flex margin-bottom-increased m-dash-separator">
          <li>Cuisine: <span className="text-emphasized">French</span></li>
          <li>Category: <span className="text-emphasized">Meat</span></li>
          <li>Dish type: <span className="text-emphasized">Dinner</span></li>
        </ul>
      </header>
      <div className="recipe-view__visual">
        <div className="recipe-view__image">
          <img className="sized-image" src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"></img>
        </div>
        <div className="stamp-border">
          <div className="stamp-border__content">
            <ul className="recipe-view__stats border">
              <li>Prep time: <span className="text-emphasized">20 min</span></li>
              <li>Cook time: <span className="text-emphasized">60</span> min</li>
              <li>Difficulty: <span className="text-emphasized">4</span></li>
              <li>Serves: <span className="text-emphasized">4</span></li>
              <li>Tried by <span className="text-emphasized">564 cookbookers</span></li>
              <li>Liked by <span className="text-emphasized">200 cookbookers</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="recipe-view__sub-header horizontal-spaced-flex margin-bottom-regular">
        <p>by <span className="text-emphasized">recipeUser121</span></p>
        <button className="ui-primary-button">Bookmark recipe</button>
      </div>
      <div className="recipe-view__ingredients margin-bottom-regular">
        <h2 className="text-subtitle margin-bottom-small">Ingredients</h2>
        <ul className="recipe-view__ingredient-list">
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">1.5 kg</span> <span>Round roast</span></li>
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">2 tbsp</span> <span>Olive oil</span></li>
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">1 tbsp</span> <span>Finely chopped fresh rosemary</span></li>
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">1 tbsp</span> <span>Minced garlic</span></li>
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">1 tsp</span> <span>Finely chopped fresh basil leaves</span></li>
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">1 tsp</span> <span>Salt</span></li>
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">1 tsp</span> <span>Dried thyme leaves</span></li>
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">1 tsp</span> <span>Freshly ground black pepper</span></li>
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">3 cups</span> <span>Beef broth</span></li>
          <li className="recipe-view__ingredient"><span className="text-emphasized amount">1 cup</span> <span>Water</span></li>
          
        </ul>
      </div>
      <div className="recipe-view__directions margin-bottom-regular">
        <h2 className="text-subtitle margin-bottom-small">Directions</h2>
        <ol className="recipe-view__direction-list decorated-ol">
          <li className="recipe-view__direction margin-bottom-tiny">Preheat oven to 160°C.</li>
          <li className="recipe-view__direction margin-bottom-tiny">Mix together oil, rosemary, garlic, basil, salt, thyme and pepper in small bowl. Set mixture aside 5 to 10 minutes. </li>
          <li className="recipe-view__direction margin-bottom-tiny">Place beef Bottom Round Roast on baking rack in tall-sided roasting pan. Rub oil mixture on roast, covering all sides.</li>
          <li className="recipe-view__direction margin-bottom-tiny">Pour broth and water in roasting pan. Insert oven-safe thermometer into center of roast. Place roasting pan in the oven</li>
          <li className="recipe-view__direction margin-bottom-tiny">Roast 75 to 105 minutes. Remove roast when meat thermometer registers 57°C.</li>
          <li className="recipe-view__direction margin-bottom-tiny">Transfer roast to carving board; tent loosely with aluminum foil. Let stand 10 minutes. (Temperature will continue to rise about 1° to 2°C.)</li>
          <li className="recipe-view__direction margin-bottom-tiny">Carve roast into slices; serve with cooking liquid or as a sandwich, topping with your favorite cheese.</li>
        </ol>
      </div>
      <div className="recipe-view__author-notes margin-bottom-regular">
        <h2 className="text-subtitle margin-bottom-small">Author notes</h2>
        <p className="margin-bottom-tiny">As far as post-cooking temperatures, we prefer a medium to medium-rare roast, with a little pink in the center. In our opinion, the meat stays more tender and flavorful this way. If you prefer not to see any pink, you can roast longer! One thing that's not optional, though, is a meat thermometer. It takes the guess work out of cooking big pieces of meat, and we swear it'll come in handy more than just this once. Pro tip: make sure you're inserting your thermometer far enough to hit the center of the roast for an accurate reading.</p>
      </div>
      <div className="tags text-small"><span className="ui-link-button text-small">&#35;weekendideas</span> <span className="ui-link-button text-small">&#35;beef</span> <span className="ui-link-button text-small">&#35;herbs</span> <span className="ui-link-button text-small">&#35;recommended</span></div>
    </article>
  )
}