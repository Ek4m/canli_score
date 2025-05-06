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
  logout(): void;
}>({
  logout() {},
  refetch() {},
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const loadData = useCallback(async () => {
    const res = await AuthService.getMe();
    if (res instanceof SuccessResponse) {
      setUser(res.response);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const logout = useCallback(() => {
    setUser(undefined);
  }, []);
  return (
    <AuthContext.Provider value={{ user, refetch: loadData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
