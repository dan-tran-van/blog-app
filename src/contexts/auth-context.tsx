import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "@/types/auth.type";
import { api } from "@/sdk";
import Cookies from "js-cookie";
import { useSWRConfig } from "swr";

export type AuthContextValue = {
  user: User | null;
  setUser: (newUser: User | null) => void;
  isLoading: boolean;
  logOut: () => void;
};

const AuthContext = createContext(null as unknown as AuthContextValue);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    api.auth
      .currentUser()
      .then((data) => setUser(data.user))
      .finally(() => setIsLoading(false));
  }, []);

  function logOut() {
    Cookies.remove("token");
    mutate("latest_blog");
    setUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        user: user,
        isLoading: isLoading,
        logOut: logOut,
        setUser: setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
