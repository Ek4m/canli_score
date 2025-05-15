import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { FailResponse, SuccessResponse } from "@/common/config/response";
import { AuthContext } from "@/modules/auth/contexts";
import { ContactFormDto } from "../types";
import { ContactService } from "../services";

export const useContactForm = () => {
  const {
    register,
    setValue,
    setError,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<ContactFormDto>({
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });
  const { user } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const contactObj = useMemo(() => {
    return {
      email: register("email"),
      name: register("name"),
      message: register("message"),
    };
  }, [register]);

  useEffect(() => {
    if (user) {
      setValue("email", user.email);
      setValue("name", user.firstName + " " + user.lastName);
    }
  }, [setValue, user]);

  const onSubmit = useCallback(
    async (data: ContactFormDto) => {
      const response = await ContactService.sendContactForm(data);
      if (response instanceof SuccessResponse) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else if (response instanceof FailResponse) {
        setError("root", { message: response.message });
      }
    },
    [setError, router]
  );

  return {
    contactObj,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    errors,
    success,
  };
};
