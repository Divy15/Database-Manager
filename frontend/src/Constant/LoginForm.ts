interface LoginFormValues{
    email : string,
    password: string
};

type LoginFormFileds = {
    name: keyof LoginFormValues,
    type : string,
    label : string,
    placeholder : string
}

export const LoginForm: LoginFormFileds[] = [
    { name:'email', type : 'email', placeholder: 'Enter your email', label : 'Email: '},
    { name:'password', type:'password', placeholder: 'Enter your password', label: 'Password: '}
]