import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperations';
import { customAlphabet } from 'nanoid';

import { contactsSchema, validateName, validateNumber } from './formValidation';

import {
  StyledForm,
  Label,
  FormButton,
  FormField,
  FormError,
} from './ContactsForm.styled';

const initialValues = {
  name: '',
  phone: '',
};
const nanoId = customAlphabet('1234567890', 4);

export const ContactsForm = () => {
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormSubmit = (values, { resetForm }) => {
    const contactExists = items.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    const newContact = { createdAt: new Date(), ...values, id: nanoId() };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={contactsSchema}
    >
      <StyledForm autoComplete="off">
        <Label>
          Name
          <FormField
            validate={validateName}
            type="text"
            name="name"
            placeholder="Jacob Mercer"
          ></FormField>
          <FormError name="name" component="div" />
        </Label>

        <Label>
          Number
          <FormField
            validate={validateNumber}
            type="tel"
            name="phone"
            placeholder="123-45-67"
          ></FormField>
          <FormError name="phone" component="div" />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </StyledForm>
    </Formik>
  );
};
