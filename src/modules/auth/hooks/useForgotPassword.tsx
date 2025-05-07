import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { FailResponse, SuccessResponse } from "@/common/config/response";
import { ForgotPasswordDto } from "../login/types";
import { AuthService } from "../services";

export const useForgotPassword = () => {
  const form = useForm<ForgotPasswordDto>();
  const [step, setStep] = useState(0);

  const forgotPasswordRegisterObj = useMemo(() => {
    return {
      email: form.register("email"),
    };
  }, [form]);

  const onForgetPassword = useCallback(
    async (data: ForgotPasswordDto) => {
      const response = await AuthService.forgotPassword(data.email);
      if (response instanceof SuccessResponse) {
        setStep(1);
      } else if (response instanceof FailResponse) {
        form.setError("root", { message: response.message });
      }
    },
    [form]
  );

  return {
    forgotPasswordRegisterObj,
    handleForgetPassword: form.handleSubmit(onForgetPassword),
    state: form.formState,
    step,
  };
};
