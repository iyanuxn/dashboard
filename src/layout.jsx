import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>header</div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
};

export default layout;
