"use client";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IUser } from "../types/interfaces";
import { AuthService } from "../services";
import { SuccessResponse } from "@/common/config/response";

export const AuthContext = createContext<{
  user?: IUser;
  refetch(): void;
  loading: boolean;
  logout(): void;
}>({
  logout() {},
  refetch() {},
  loading: true,
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    const res = await AuthService.getMe();
    if (res instanceof SuccessResponse) {
      setUser(res.response);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const logout = useCallback(() => {
    setUser(undefined);
  }, []);
  return (
    <AuthContext.Provider value={{ user, refetch: loadData, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
