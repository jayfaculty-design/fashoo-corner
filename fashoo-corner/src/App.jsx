import { createContext, useState } from "react";
import Home from "./Home";

export const NavContext = createContext();

export default function App({ children }) {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
}
