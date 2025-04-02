import React from 'react'

const IngridientSection = (props) => {
  return (
    <section className="main-body">
                <h2 className="mainhead">Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{props.item}</ul>
                {props.items.length >= 3 && <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
                   
            </section>
  )
}

export default IngridientSection