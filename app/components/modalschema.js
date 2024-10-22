import * as Yup from 'yup';

export const emailSchema = Yup.object().shape({
    title: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email!").required("Required!"),
    content: Yup.string()
    .required("Missing content")
}); 
