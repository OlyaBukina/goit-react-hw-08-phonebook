import { ContactsForm } from './ContactsForm/ContactsForm';
import { Container } from './Container/Container.styled';
import { ContactsContainer } from './ContactsContainer/ContactsContainer';
export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <ContactsContainer />
    </Container>
  );
};
