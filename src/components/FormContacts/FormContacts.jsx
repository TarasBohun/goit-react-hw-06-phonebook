import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { FormField, Form } from './FormContacts.styled';

export const FormContacts = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </FormField>

        <FormField>
          <Field
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </FormField>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

FormContacts.propType = {
  onSave: PropTypes.func.isRequired,
};
