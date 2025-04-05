import React, { useState, useEffect } from "react";
import RecipeCode from "./RecipeCode";
import IngridientSection from "./IngridientSection";
import { getRecipeFromMistral } from "./ai";

const Main = () => {
  const [items, setItems] = React.useState([]);

  const item = items.map((item) => <li key={item}>{item}</li>);

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setItems((prev) => [...prev, newIngredient]);
  }
  const [recipe, setRecipe] = useState("");

  const recipeSection = React.useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(items);
    setRecipe(recipeMarkdown);
  }
  return (
    <main>
      <form action={handleSubmit} className="form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {items.length > 0 && (
        <IngridientSection
          ref={recipeSection}
          item={item}
          getRecipe={getRecipe}
          items={items}
        />
      )}
      {recipe && <RecipeCode recipe={recipe} />}
    </main>
  );
};

export default Main;
