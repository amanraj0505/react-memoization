import React, { useState, useMemo } from "react";
import Title from "./Title";
const Parent2 = () => {
  const [count1, setCoun1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCounter1 = () => {
    setCoun1(count1 + 1);
  };
  const incrementCounter2 = () => {
    setCount2(count2 + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 600000000) i++;
    return count1 % 2 === 0;
  }, [count1]);
  /**
   * Same reason as useCallback hook so that the new copy of an expensive function is not created every time the component is re-rendered.
   * so if we use useMemo only the function isEven is called while the first button is clicked and not the seconfd button is clicked.
   * The only difference between useMemo and UseCallback is useMemo returns a value and useCallback returns a function.
   */
  return (
    <div>
      <Title text={"Use Memo Hook"} />
      <br />
      <button onClick={incrementCounter1}>Counter1 - {count1}</button>
      <br />
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <br />
      <button onClick={incrementCounter2}>Counter2 - {count2}</button>
    </div>
  );
};
export default Parent2;
