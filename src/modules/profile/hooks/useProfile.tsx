import { useCallback, useContext, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { FailResponse, SuccessResponse } from "@/common/config/response";
import { ProfileDto } from "../types";
import { ProfileService } from "../services";
import { AuthContext } from "@/modules/auth/contexts";

export const useProfile = () => {
  const { user, refetch } = useContext(AuthContext);
  const form = useForm<ProfileDto>();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const body: ProfileDto = {
        city: user.city,
        country: user.city,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
      };
      form.reset(body);
    }
  }, [user, form]);

  const registerRegisterObj = useMemo(() => {
    return {
      firstName: form.register("firstName"),
      lastName: form.register("lastName"),
      phone: form.register("phone"),
      country: form.register("country"),
      city: form.register("city"),
    };
  }, [form]);

  const onSubmit = useCallback(
    async (data: ProfileDto) => {
      const response = await ProfileService.update(data);
      if (response instanceof SuccessResponse) {
        await refetch();
        router.push("/scores");
      } else if (response instanceof FailResponse) {
        form.setError("root", { message: response.message });
      }
    },
    [form, router, refetch]
  );

  return {
    registerRegisterObj,
    handleSubmit: form.handleSubmit(onSubmit),
    state: form.formState,
  };
};
