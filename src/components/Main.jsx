import React, { useState } from "react";
import RecipeCode from "./recipeCode";
import IngridientSection from "./IngridientSection";
import {getRecipeFromMistral} from './ai'

const Main = () => {

  const [items, setItems] = React.useState([]);

  const item = items.map(item => (<li key={item}>{item}</li>));

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setItems(prev => [...prev, newIngredient]);
  }
  const[recipe,setRecipe]=useState("")
  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(items)
    setRecipe(recipeMarkdown)

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

      {items.length > 0 && <IngridientSection
      item={item}
      getRecipe={getRecipe}
      items={items}
      />
      }
      {recipe && <RecipeCode recipe={recipe}/>

      } 
    </main>
  );
};

export default Main;
