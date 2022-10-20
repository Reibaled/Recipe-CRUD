import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [formState, setFormState] = useState({});
 
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  //Clear input after submission 
  const handleSubmit=(event) =>{
    event.preventDefault();
    createRecipe(formState);
  }
  
  return (
    <form name="create" onSubmit={handleSubmit} >
      <table>
        <tbody>
          <tr>
            <td> 
              <input name="name" placeholder="Name" onChange={handleChange} type = 'text'/>
            </td>
            <td>
              <input name="cuisine" placeholder="Cuisine" onChange={handleChange} type = 'text'/>
            </td>
            <td>
              <input name="photo" placeholder="URL" onChange={handleChange} type="url" />
            </td>
            <td>
              <textarea name="ingredients" placeholder="ingredients" onChange={handleChange} type = 'text'/>
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" onChange={handleChange} type = 'text'/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
