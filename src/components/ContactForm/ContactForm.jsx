import {ErrorMessage, Field, Form, Formik} from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

export const ContactForm = ({onAdd}) => {
  const idFieldName = crypto.randomUUID();
  const idFieldNumber = crypto.randomUUID();
  const idNewContact = crypto.randomUUID();

  const initialValues = {
    nameContact: "",
    numberContact: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      id: idNewContact,
      name: values.nameContact,
      number: values.numberContact,
    });
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    nameContact: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),

    numberContact: Yup.string()
      .min(3, "Too short!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor="{idFieldName}">
          <span>Name</span>
          <Field
            id={idFieldName}
            type="text"
            name="nameContact"
          />
          <ErrorMessage
            name="nameContact"
            component="div"
          />
        </label>

        <label htmlFor="{idFieldNumber}">
          <span>Number</span>
          <Field
            id={idFieldNumber}
            type="text"
            name="numberContact"
          />
          <ErrorMessage
            name="numberContact"
            component="div"
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
