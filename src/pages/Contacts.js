import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operations';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ModalWrapper } from 'components/Modal/Modal';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  useTheme,
  Box,
  Typography,
  Container,
  IconButton,
} from '@mui/material';

const Contacts = () => {
  const { items, isLoading, error, isRefresh } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const theme = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch, isRefresh]);

  return (
    <Container
      component="main"
      maxWidth="s"
      sx={{
        position: 'relative',
        maxWidth: 580,
        backgroundColor: '#fff',
        padding: '18px',
        borderRadius: '10px',
      }}
    >
      {isModalOpen && (
        <>
          <ModalWrapper onClose={toggleModal} open={isModalOpen}>
            <Box>
              <Typography
                component="h3"
                variant="h5"
                textAlign="center"
                mt="16px"
                color={theme.palette.primary.main}
              >
                Add contact
              </Typography>
            </Box>
            <ContactsForm
              onSave={toggleModal}
              actionOnSubmit={addContact}
              actionBtnText="Add contact"
            />
          </ModalWrapper>
        </>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h4"
          variant="h3"
          mt="16px"
          mb="16px"
          fontSize="2rem"
          color={theme.palette.primary.main}
        >
          Contacts
        </Typography>
        <IconButton
          type="button"
          onClick={toggleModal}
          aria-label="edit"
          sx={{ height: '40px' }}
        >
          <PersonAddIcon />
        </IconButton>
      </Box>
      <Filter />
      {isLoading && !error && <Loader position="flex-start" height="50vh" />}
      {!isLoading && !error && !isRefresh && <ContactsList />}
      {!isLoading && !error && items.length === 0 && (
        <Notification message="There are no contacts" />
      )}
    </Container>
  );
};

export default Contacts;
