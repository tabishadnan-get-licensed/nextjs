import * as Yup from "yup";
import * as MESSAGES from "@/constants/messages";
import { useFormik } from "formik";

// ***** validationRules *****
const validationRules = {
  email: Yup.string()
    .email("Invalid email.")
    .required(MESSAGES.INPUT_DEFAULT_ERROR_MESSAGE),
  fullName: Yup.string()
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter your full name.")
    .min(2, "Name at least 2 characters.")
    .max(50, "Name at least 50 characters.")
    .required(MESSAGES.INPUT_DEFAULT_ERROR_MESSAGE),
};
