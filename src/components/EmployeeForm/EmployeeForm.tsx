import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

function EmployeeForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            age: "",
            job: "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            surname: Yup.string().required("Surname is required"),
            age: Yup.number().required("Age is required"),
            job: Yup.string().required("Job is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                type="text"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
            />
            <Input
                type="text"
                name="surname"
                label="Surname"
                value={formik.values.surname}
                onChange={formik.handleChange}
                error={formik.errors.surname}
            />
            <Input
                type="number"
                name="age"
                label="Age"
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.errors.age}
            />
            <Input
                type="text"
                name="job"
                label="Job"
                value={formik.values.job}
                onChange={formik.handleChange}
                error={formik.errors.job}
            />
            <Button type="submit" name="Submit" onClick={formik.handleSubmit} />
        </form>
    );
}

export default EmployeeForm;