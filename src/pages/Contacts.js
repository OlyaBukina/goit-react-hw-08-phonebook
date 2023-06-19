import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import { fetchAllContacts } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { ModalWrapper } from '../components/Modal/Modal';
import { addContact } from '../redux/contacts/contacts-operations';
import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { Loader } from '../components/Loader/Loader';
import { Notification } from '../components/Notification/Notification';
import Container from '@mui/material/Container';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';

const Contacts = () => {
  const { items, isLoading, error, isRefresh } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch, isRefresh]);
  return (
    <Container component="main" maxWidth="xs">
      <IconButton type="button" onClick={toggleModal} aria-label="edit">
        <PersonAddIcon />
      </IconButton>
      {isModalOpen && (
        <ModalWrapper onClose={toggleModal} open={isModalOpen}>
          <Typography component="h3" variant="h5">
            Phonebook
          </Typography>
          <ContactsForm
            onSave={toggleModal}
            actionOnSubmit={addContact}
            actionBtnText="Add contact"
          />
        </ModalWrapper>
      )}

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && !error && !isRefresh && <ContactsList />}
      {!isLoading && !error && items.length === 0 && (
        <Notification message="There are no contacts" />
      )}
    </Container>
  );
};

export default Contacts;
