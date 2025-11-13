export interface EmployeeFormValues {
    name: string;
    surname: string;
    age: number;
    job: string;
}

export interface EmployeeFormComponentProps {
    onSubmit: (values: EmployeeFormValues) => void;
}