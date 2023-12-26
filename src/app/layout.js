"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3006/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status !== 200) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      const { token } = data;

      console.log(token);
    } catch (err) {
      console.log(err, "FFF");
    }

    // const { token } = await res.json();

    // setIsLoggedIn(true);
    // localStorage.setItem("token", token);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3006")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logIn }}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
