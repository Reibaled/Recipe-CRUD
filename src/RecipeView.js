import React from "react";

function RecipeView({ recipe, deleteRecipe}) {
  const name = <p>{recipe.name}</p>
const cuisine = <p>{recipe.cuisine}</p>
  const photo = <img src={recipe.photo}/>
  const ingredients = <p>{recipe.ingredients}</p>
  const preparation = <p>{recipe.preparation}</p>
  
  return (
      <tr>
            <td>
              {name}
            </td>
            <td>
              {cuisine}
            </td>
            <td className="photo_td">
             {photo}
            </td>
            <td className="content_td">
              {ingredients}
            </td>
            <td className="content_td">
             {preparation}
            </td>
            <td>
              <button name="delete" onClick={deleteRecipe}>Delete</button>
            </td>
           
         </tr>
  );
}

export default RecipeView;