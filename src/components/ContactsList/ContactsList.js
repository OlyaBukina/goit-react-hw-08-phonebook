import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import List from '@mui/material/List';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
