// TODO: fix formFields type
export function getIngredients(formFields: any, numberOfIngredients: number) {
  const ingredients = []
  for (let i = 0; i < numberOfIngredients; i++) {
    ingredients.push({
      name: formFields[`ingredient${i}`],
      quantity: parseInt(formFields[`quantity${i}`]),
      unit: formFields[`unit${i}`],
    })
  }
  return ingredients;
}

export function getSteps(formFields: any, numberOfSteps: number) {
  const steps = []
  for (let i = 0; i < numberOfSteps; i++) {
    steps.push({stepNumber: (i + 1), stepInstructions: formFields[`step${i}`]})
  }
  return steps;
}
