import { Formik, Field } from 'formik';
import { Form, FormField, SubmitBtn, ErrorMessage } from './FormsAdd.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice/contactsSlice';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  number: Yup.number('')
    .typeError(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(5, 'Too Short!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, action) => {
        dispatch(addContact(values));
        action.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Number
          <Field name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </FormField>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};
