import { createContext, useContext, useState } from "react";
type User = {
  cartNo:number;
  pin:number;
 
};

export type AuthContextType = {
  user: User | null;
  login: (cartNo:number, pin:number ) => void;
  logout: () => void;
  isAuthenticated: boolean;
};
type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (cartNo:number,pin:number) => {
    setUser({ cartNo, pin });
  };
  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = user !== null && user.pin !== null && user.cartNo!==null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
