import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth, provider } from "../../lib/config";

type AuthContextType = {
    user: User | null;
    handleSignIn: () => void;
    handleLogout: () => void;
  }

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return <AuthContext.Provider value={{ user, handleSignIn, handleLogout }}>{children}</AuthContext.Provider>;
};

export const UserAuth = (): AuthContextType => {
  return useContext(AuthContext);
};
