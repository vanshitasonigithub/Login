import * as yup from "yup";

export const LoginValidate = yup.object({
  email: yup.string().required("Please Enter the Username/Email"),
  password: yup.string().required("Please Enter the Password"),
});
