"use client"
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [product, setproduct] = useState(null)
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart(cart.concat([item]))
  }

  const removeFromCart = (item) => {
    let ctr = 0
    setCart(cart.filter((el) => {
      if (el.id !== item.id) {
        return true
      } else if (ctr == 0) {
        ctr = 1
        return false
      } else {
        return true
      }
    }))
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, product, setproduct, addToCart, removeFromCart, cart }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
