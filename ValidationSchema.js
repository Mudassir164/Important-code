const validationSchema = Yup.object({
  fullname: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .min(3, "Please enter valid name")
    .max(40)
    .required("Name is Required"),

  email: Yup.string()
    .trim()
    .email("Invalid Email")
    .required("Email is required"),
  companyEmail: Yup.string()
    .trim()
    .email("Invalid Company Email")
    .required("Company Email is required"),

  companyName: Yup.string()
    .trim()
    .min(3, "Invalid Company Name")
    .required("Company Name  is required"),
  country:
    countries &&
    Yup.string()
      .required("Please select a Service")
      .oneOf(countries, "Please Select a Service"),

  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

  confirmPassword: Yup.string()
    .trim()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must be match"),

  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),

  streetAddress: Yup.string().trim().required("Address is Required"),

  postal: Yup.string()
    .length(5)
    .matches(/^[0-9]{5}/)
    .required("Postal code is required"),
});
