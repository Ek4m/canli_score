import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { FailResponse, SuccessResponse } from "@/common/config/response";
import { ResetPasswordDto } from "../login/types";
import { AuthService } from "../services";

export const useResetPassword = () => {
  const form = useForm<ResetPasswordDto>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) form.setValue("token", token);
  }, [form]);

  const forgotPasswordRegisterObj = useMemo(() => {
    return {
      password: form.register("newPassword"),
    };
  }, [form]);

  const onResetPassword = useCallback(
    async (data: ResetPasswordDto) => {
      const response = await AuthService.resetPassword(data);
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
    handleForgetPassword: form.handleSubmit(onResetPassword),
    state: form.formState,
    step,
  };
};
