import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";

import { FailResponse, SuccessResponse } from "@/common/config/response";
import { LoginDto } from "../types";
import { AuthService } from "../../services";

export const useLogin = () => {
  const form = useForm<LoginDto>();

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
        console.log(response.response);
      } else if (response instanceof FailResponse) {
        form.setError("root", { message: response.message });
      }
    },
    [form]
  );

  return {
    loginRegisterObj,
    handleSubmit: form.handleSubmit(onSubmit),
    state: form.formState,
  };
};
