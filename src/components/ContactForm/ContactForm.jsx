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

    numberContact: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Add Contact</h2>
        <label htmlFor="{idFieldName}">
          <span className={css.label}>Name</span>
          <Field
            id={idFieldName}
            type="text"
            name="nameContact"
            className={css.field}
          />
          <ErrorMessage
            name="nameContact"
            component="div"
            className={css.message__error}
          />
        </label>

        <label htmlFor="{idFieldNumber}">
          <span className={css.label}>Number</span>
          <Field
            id={idFieldNumber}
            type="text"
            name="numberContact"
            className={css.field}
          />
          <ErrorMessage
            name="numberContact"
            component="div"
            className={css.message__error}
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
