import { useState } from "react";

function Form({ setHeight, setWeight, setSubmit, setResult }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let heightVal = e.target.elements.height.value;
    let weightVal = e.target.elements.weight.value;
    setSubmit("true");
    setHeight(heightVal);
    setWeight(weightVal);
    const result = weightVal / (heightVal * heightVal);
     heightVal = "";
    weightVal = "";

    setResult(result.toFixed(2));
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Height in meter</p>
      <input type="text" placeholder="Enter your height" name="height"></input>
      <p>Weight in Kgs</p>
      <input type="text" placeholder="Enter your weight" name="weight"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
