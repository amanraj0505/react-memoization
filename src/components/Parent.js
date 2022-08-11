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
   * incrementage and increment salary is created so as the props of the button changes it causes re-render of button.
   */
  console.log("Parent Render");
  return (
    <div>
      <Title />
      <Count text={"Salary"} data={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
      <Count text={"Age"} data={age} />
      <Button handleClick={incrementAge}>Inrement Age</Button>
    </div>
  );
};
export default Parent;
