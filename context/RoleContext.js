"use client";

import { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [role, setRole] = useState("admin"); // 'admin' or 'viewer'

  const toggleRole = () => {
    setRole((prev) => (prev === "admin" ? "viewer" : "admin"));
  };

  return (
    <RoleContext.Provider value={{ role, toggleRole, isAdmin: role === "admin" }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
}
