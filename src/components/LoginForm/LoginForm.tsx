import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import { LoginFormComponent, Title } from "./styles";
import type { LoginFormValues } from "./types";
import Input from "components/Input/Input";

function LoginForm() {
    const shema = Yup.object().shape({
      email: Yup.string()
        .required("Field email is required")
        .email("Field has type email")
        .max(20, "Max 20 symbols")
        .min(10, "Min 10 symbols")
        .typeError("Email must be string"),
      password: Yup.number()
        .required("Field password is required")
        .test(
          "Check max",
          "Max 20 symbols",
          (value) => String(value).length <= 20
        )
        .typeError("Password must be numbers"),
    });
  
    const formik = useFormik({
      
        initialValues: {
        email: "",
        password: "",
      } as LoginFormValues,
      validationSchema: shema,
      validateOnChange: false,
      onSubmit: (values: LoginFormValues): void => {
        console.log(values);
      },
    });
  
    console.log(formik);
  
    return (
      <LoginFormComponent onSubmit={formik.handleSubmit}>
        <Title>Login form</Title>
        <Input
          name="email"
          label="Email*"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Input
          name="password"
          label="Password*"
          placeholder="Enter your password"
          // type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button type="submit" name="Login" />
      </LoginFormComponent>
    );
  }
  

export default LoginForm;
