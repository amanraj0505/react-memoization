import React from "react";

const Button = ({ handleClick, children }) => {
  console.log("Button Render ", children);
  return (
    <button onClick={handleClick} style={{ marginTop: 10 }}>
      {children}
    </button>
  );
};
/**
 * wrap the returned component with React.memo() and the component will re-render only when the props and state associated with it changes.
 */
export default React.memo(Button);
