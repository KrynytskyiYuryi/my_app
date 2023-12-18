import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div style={{ border: "2px solid teal", padding: 10, borderRadius: 16 }}>
      {children}
    </div>
  );
};

export default Sidebar;
