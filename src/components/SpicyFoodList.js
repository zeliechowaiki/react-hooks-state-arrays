import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  // const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleFilterChange(selectedCuisine) {
    if (selectedCuisine === 'All') {
      setFoods(foods);
    }
    else {
      setFoods(foods.filter(food => {
        return food.cuisine === selectedCuisine;
      }))
    }
  }

  // function handleLiClick(id) {
  //   const newFoodArray = foods.filter(food => food.id !== id);
  //   setFoods(newFoodArray);
  // }

  function handleHeatClick(id) {
    const newFoodArray = foods.map(food => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        };
      }
      else {
        return food;
      }
    })
    setFoods(newFoodArray);
  }


  const foodList = foods.map((food) => (
    <li key={food.id} 
    // onClick={() => handleLiClick(food.id)}
    onClick={() => handleHeatClick(food.id)}
    >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
       <select name="filter" onChange={(e) => handleFilterChange(e.target.value)}>
         <option value="All">All</option>
         <option value="American">American</option>
         <option value="Sichuan">Sichuan</option>
         <option value="Thai">Thai</option>
         <option value="Mexican">Mexican</option>
       </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
