import React from "react";

const Count = ({ text, data }) => {
  console.log("Count Render", text, data);
  return (
    <div style={{ marginTop: 10, fontSize: 30 }}>
      {text} - {data}
    </div>
  );
};
export default React.memo(Count);
