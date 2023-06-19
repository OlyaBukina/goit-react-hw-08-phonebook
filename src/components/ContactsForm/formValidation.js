import * as yup from 'yup';

export const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field!')
    .min(2, 'Too short name!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    ),

  number: yup
    .string()
    .required('Number is a required field!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`
    ),
});
