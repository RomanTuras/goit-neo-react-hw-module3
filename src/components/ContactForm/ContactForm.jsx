import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  id: 0,
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ addContactHandle }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    addContactHandle({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <fieldset className={css.formLegend}>
        <legend>Contact info</legend>
        <Form className={css.contactForm}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            className={css.formField}
            id={nameFieldId}
          />
          <ErrorMessage name="name" className={css.errors} component="span" />

          <label htmlFor={numberFieldId} className={css.mt20}>
            Number
          </label>
          <Field
            type="phone"
            name="number"
            className={css.formField}
            id={numberFieldId}
          />
          <ErrorMessage name="number" className={css.errors} component="span" />

          <button type="submit" className={css.mt20}>
            Add contact
          </button>
        </Form>
      </fieldset>
    </Formik>
  );
};

export default ContactForm;
