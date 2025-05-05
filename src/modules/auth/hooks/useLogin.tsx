import { useCallback, useContext, useMemo } from "react";
import { useForm } from "react-hook-form";

import { FailResponse, SuccessResponse } from "@/common/config/response";
import { LoginDto } from "../login/types";
import { AuthService } from "../services";
import { AuthContext } from "../contexts";

export const useLogin = () => {
  const form = useForm<LoginDto>();
  const { refetch } = useContext(AuthContext);

  const loginRegisterObj = useMemo(() => {
    return {
      email: form.register("email"),
      password: form.register("password"),
    };
  }, [form]);

  const onSubmit = useCallback(
    async (data: LoginDto) => {
      const response = await AuthService.login(data);
      if (response instanceof SuccessResponse) {
        refetch();
      } else if (response instanceof FailResponse) {
        form.setError("root", { message: response.message });
      }
    },
    [form, refetch]
  );

  return {
    loginRegisterObj,
    handleSubmit: form.handleSubmit(onSubmit),
    state: form.formState,
  };
};
