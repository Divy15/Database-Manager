// 1. Define form values shape
export interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
  organization: string;
  country_code: string;
}

// 2. Use keyof SignupFormValues for config
type SignupFormField = {
  name: keyof SignupFormValues;
  label: string;
  type: string;
  placeholder: string;
};

// 3. Define your constants
export const signupFormConstant: SignupFormField[] = [
  { name: "name", label: "Full Name:", placeholder: "Enter your full name", type: "text" },
  { name: "email", label: "Email:", placeholder: "Enter your email", type: "email" },
  { name: "password", label: "Password:", placeholder: "Enter your password", type: "password" },
  { name: "phone", label: "Phone:", placeholder: "Enter your phone number", type: "tel" },
  { name: "organization", label: "Organization Name:", placeholder: "Enter your organization name", type: "text" }
];
