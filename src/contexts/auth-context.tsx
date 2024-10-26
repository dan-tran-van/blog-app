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
import useSWR, { KeyedMutator } from "swr";

export type AuthContextValue = {
  user: User | null;
  setUser: (newUser: User | null) => void;
  data: { user: User } | undefined;
  isLoading: boolean;
  loading: boolean;
  logOut: () => void;
  loggedOut?: boolean;
  mutate?: KeyedMutator<{ user: User } | null>;
};

const AuthContext = createContext(null as unknown as AuthContextValue);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { data, mutate, error } = useSWR("current_user", api.auth.currentUser);
  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  useEffect(() => {
    api.auth
      .currentUser()
      .then((data) => setUser(data.user))
      .finally(() => setIsLoading(false));
  }, []);

  function logOut() {
    Cookies.remove("token");
    setUser(null);
    mutate(null);
  }
  return (
    <AuthContext.Provider
      value={{
        user: user,
        data: data,
        isLoading: isLoading,
        logOut: logOut,
        setUser: setUser,
        loading: loading,
        loggedOut: loggedOut,
        mutate: mutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
