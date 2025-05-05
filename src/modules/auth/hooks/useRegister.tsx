import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";

import { FailResponse, SuccessResponse } from "@/common/config/response";
import { RegisterDto } from "../login/types";
import { AuthService } from "../services";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const form = useForm<RegisterDto>();
  const router = useRouter();

  const registerRegisterObj = useMemo(() => {
    return {
      email: form.register("email"),
      password: form.register("password"),
      firstName: form.register("firstName"),
      lastName: form.register("lastName"),
      phone: form.register("phone"),
      country: form.register("country"),
      city: form.register("city"),
    };
  }, [form]);

  const onSubmit = useCallback(
    async (data: RegisterDto) => {
      const response = await AuthService.register(data);
      if (response instanceof SuccessResponse) {
        router.push("/auth/login");
      } else if (response instanceof FailResponse) {
        form.setError("root", { message: response.message });
      }
    },
    [form, router]
  );

  return {
    registerRegisterObj,
    handleSubmit: form.handleSubmit(onSubmit),
    state: form.formState,
  };
};
