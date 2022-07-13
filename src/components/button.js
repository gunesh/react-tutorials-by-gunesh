import React, { useState } from "react";

function Button() {
  const [theme, setTheme] = useState("light");
 
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return <button data-testid="my-button" onClick={toggleTheme}>
      Current theme: {theme}
    </button>;
}

export default Button;