import React from "react";

const Header = ({ search, setter }) => {
  return (
    <header>
      <h1>Meal API</h1>
      <input
        type="text"
        placeholder="Taper le nom d'un plat (en anglais...)"
        onChange={(e) => setter(e.target.value)}
        value={search}
      />
    </header>
  );
};

export default Header;
