import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";

// import { db } from "~/utils/db.server";
// import { getUserId, requireUserId } from "~/utils/session.server";
import { getIngredients, getSteps } from "./recipeFormFunctions";

export const loader: LoaderFunction = async ({request}) => {
  const data = {
    // recipeCuisine: await db.recipeCuisine.findMany(),
    // recipeCategory: await db.recipeCategory.findMany(),
    // recipeCourse: await db.recipeCourse.findMany(),
    // ingredientUnit: await db.ingredientUnit.findMany(),
  };
 
  // let userId = await getUserId(request);
  if (!userId) throw new Response("Unauthorized", { status: 401 });
  return {...data, userId};
};

export const action: ActionFunction = async ({
  request,
}) => {
  // const userId = await requireUserId(request);
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);

  const {name, image, authorNotes, categoryId, courseId, cuisineId, prepTime, cookTime, servings, numberOfIngredients, numberOfSteps} = fields;

  console.log(fields);

  const ingredients = getIngredients(fields, parseInt(numberOfIngredients));
  const steps = getSteps(fields, parseInt(numberOfSteps));

  // const ingredientIds = await Promise.all(ingredients.map(async (ingredient) => {
  //   const createdIngredient = await db.ingredient.create({ data: ingredient})
  //   return createdIngredient.ingredientId;
  // }));

  // const stepIds = await Promise.all(steps.map(async (step) => {
  //   const createdStep = await db.recipeStep.create({data: step})
  //   console.log(createdStep);
  //   return createdStep.stepId;
  // }));



  // let recipe = await db.recipe.create({
  //   data: {
  //     name,
  //     image,
  //     authorNotes,
  //     categoryId,
  //     courseId,
  //     cuisineId,
  //     prepTime: parseInt(prepTime),
  //     cookTime: parseInt(cookTime),
  //     servings: parseInt(servings),
  //     ingredients: {
  //       create: ingredients
  //     },
  //     steps: {
  //       create: steps
  //     },
  //     authorId: userId
  //   }});

  // return redirect(`/recipes/${recipe.recipeId}`);
  return null
}

export default function RecipesRouteAdd() {
  const data = useLoaderData();

  const [numberOfIngredients, setNumberOfIngredients] = useState(1);
  const [numberOfSteps, setNumberOfSteps] = useState(1);

  function increaseIngredientFields(e: any) {
    e.preventDefault();
    setNumberOfIngredients(numberOfIngredients + 1);
  }

  function increaseStepsInputFields(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setNumberOfSteps(numberOfSteps + 1);
  }

  return (
    <div className="recipe-add site-content">
    <h1 className="text-title margin-bottom-regular">Add a recipe</h1>
    <Form method="post">
      <div className="ui-text-field">
        <label htmlFor="name-input">Recipe name</label>
        <input type="text" id="name-input" name="name" />
      </div>
      <div className="ui-text-field">
        <label htmlFor="image-input">Image</label>
        <input type="text" id="image-input" name="image" />
      </div>
      <div className="ui-divider"/>
      <h2 className="text-subtitle margin-bottom-decreased">Recipe details</h2>
      <div className="ui-text-field">
        <label htmlFor="name-input">Cuisine</label>
        <select name="cuisineId" id="cuisine">
          {data.recipeCuisine.map((cuisine: any) => (
            <option value={cuisine.cuisineId} key={cuisine.cuisineId}>
              {cuisine.cuisineName}
            </option>
          ))}
        </select>
      </div>
      <div className="ui-text-field">
        <label htmlFor="name-input">Category</label>
        <select name="categoryId" id="category">
          {data.recipeCategory.map((category: any) => (
            <option value={category.categoryId} key={category.categoryId}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
      <div className="ui-text-field">
        <label htmlFor="name-input">Course</label>
        <select name="courseId" id="course">
          {data.recipeCourse.map((course: any) => (
            <option value={course.courseId} key={course.courseId}>
              {course.courseName}
            </option>
          ))}
        </select>
      </div>
      <div className="ui-divider" />
      <h2 className="text-subtitle margin-bottom-decreased">Ingredients</h2>
      {[...Array(numberOfIngredients)].map((e, i) => (
            <div className="ingredient-input margin-bottom-small" key={`ingredient-${i}`}>
              <input name={`quantity${i}`} className="number-input margin-right-tiny"></input>
              <select name={`unit${i}`} className="margin-right-tiny">
                {data.ingredientUnit.map((unit: any) => (
                  <option value={unit.unitId} key={unit.unit}>
                    {unit.name}
                  </option>
                ))}
              </select>
              <input name={`ingredient${i}`}></input>
            </div>
          ))}
      <input
        type="hidden"
        name="numberOfIngredients"
        value={numberOfIngredients}
      />
      <span className="text-heading ui-highlight">&#43;</span> <button className="ui-link-button" onClick={increaseIngredientFields}>Add another ingredient</button>
      <div className="ui-divider" />
      <h2 className="text-subtitle margin-bottom-decreased">Steps</h2>
      <ol className="decorated-ol">
      {[...Array(numberOfSteps)].map((e, i) => (
            <li className="step-input" key={`step-${i}`}>
              <textarea name={`step${i}`} rows={3} className="margin-bottom-small display-inline-block text-area-expanded"/>
            </li>
          ))}
      </ol>
      <input
            type="hidden"
            name="numberOfSteps"
            value={numberOfSteps}
          />
      <span className="text-heading ui-highlight">&#43;</span> <button className="ui-link-button" onClick={increaseStepsInputFields}>Add another step</button>
      <div className="ui-divider" />
      <h2 className="text-subtitle margin-bottom-decreased">Recipe details</h2>
      <div className="ui-text-field">
        <label htmlFor="recipe-prep-time">Recipe prep time</label>
        <input type="text" name="prepTime" id="recipe-prep-time" className="number-input" />
      </div>
      <div className="ui-text-field">
        <label htmlFor="recipe-cook-time">Recipe cook time</label>
        <input type="text" name="cookTime" id="recipe-cook-time" className="number-input" />
      </div>
      <div className="ui-text-field">
        <label htmlFor="recipe-servings">Serves</label>
        <input type="text" name="servings" id="recipe-servings" className="number-input" />
      </div>
      <div className="ui-divider" />
      <h2 className="text-subtitle margin-bottom-decreased">Author notes</h2>
      <textarea name="authorNotes" rows={3} className="margin-bottom-large display-inline-block text-area-expanded" />
      <div className="submit-area horizontal-centered-flex">
        <button type="submit" className="ui-primary-button">
          Submit recipe
        </button>
      </div>
    </Form>
  </div>
  )
}
