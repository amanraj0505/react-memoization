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
    while (i < 9000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);
  /**
   * Use Callback is used here because each time parent re-renders a new copy of
   * incrementage and increment salary is created so as the props of the button changes it causes re-render of button.
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
