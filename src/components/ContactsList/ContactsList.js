import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { List } from './ContactsList.styled';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
