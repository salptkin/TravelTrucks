import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "A name must have a minimum of 3 characters")
    .required("A name must have a minimum of 3 characters"),
  email: Yup.string()
    .email("Please provide a valid email address")
    .required("Please provide a valid email address"),
  bookingDate: Yup.date().required("Select a date for your booking"),
  comment: Yup.string(),
});