import React, {useState} from 'react';

function MyComponent(){
  
  const [Foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood(){//this function adds to the array
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value= "";
    setFoods(F => [...F, newFood]);//spread operator will display the original array first then the new one.
    //updater function works with the previous not current


  }

  function handleRemoveFood(index){//this function removes from the array
    setFoods(Foods.filter((_, i) => i !==index));
  }

  return(
    <div>
      <h2>List of Food</h2>
      <ul>
        {Foods.map((Food, index) => <li key={index} onClick={() =>handleRemoveFood(index)}>{Food}</li>)}
      </ul>
      <input type="text" id="foodinput" placeholder="Enter food name"/>

      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );//map method returns a new array

}

export default MyComponent;