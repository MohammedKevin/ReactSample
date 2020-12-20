import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  };
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "50px", marginBottom: "15px" }}>Kevins Todos</h1>
      <p style={{ fontSize: "19px" }}>Add what you need to do</p>
    </header>
  );
};

export default Header;
