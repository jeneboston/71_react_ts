import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "components/Button/Button";
import { LoginFormComponent, Title } from "./styles";
import type { LoginFormValues } from "./types";
import Input from "components/Input/Input";

const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

function LoginForm() {
    const formik = useFormik<LoginFormValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <LoginFormComponent onSubmit={formik.handleSubmit}>
            <Title>Login form</Title>
            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
                
            />
            {formik.touched.email && formik.errors.email && (
                <div style={{ color: "#ef4444", fontSize: 12 }}>
                    {formik.errors.email}
                </div>
            )}
            <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            {formik.touched.password && formik.errors.password && (
                <div style={{ color: "#ef4444", fontSize: 12 }}>
                    {formik.errors.password}
                </div>
            )}
            <Button type="submit" name="Login" />
        </LoginFormComponent>
    );
}

export default LoginForm;
