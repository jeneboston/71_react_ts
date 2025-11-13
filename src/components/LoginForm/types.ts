export interface LoginFormValues {
    email: string;
    password: string;
}
export interface LoginFormComponent {
    onSubmit: (values: LoginFormValues) => void;
}