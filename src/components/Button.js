import React from "react";

const Button = ({ handleClick, children }) => {
  console.log("Button Render ", children);
  return (
    <button onClick={handleClick} style={{ marginTop: 10 }}>
      {children}
    </button>
  );
};
export default React.memo(Button);
