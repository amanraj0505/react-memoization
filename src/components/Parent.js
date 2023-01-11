import React, { useCallback, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
const Parent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  /**
   * Use Callback is used here because each time parent re-renders a new copy of
   * increment age and increment salary is created so as the props of the button changes it causes re-render of button.
   * (UseCallback is used for creating memoized version of a callback function that only changes if one of its dependent variables changes)
   * (It is also useful for passing callback functions to optimized child component that rely on refrence equality to prevent unnecessary re-render)
   */

  /**
   * why we dont want a new reference of a function to be created when the parent re-renders, because if it does then all the component in which that is passed as a
   * props will re render.
   */
  console.log("Parent Render");
  return (
    <div>
      <Title text={"React Memoization"} />
      <Count text={"Salary"} data={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
      <Count text={"Age"} data={age} />
      <Button handleClick={incrementAge}>Inrement Age</Button>
    </div>
  );
};
export default Parent;
