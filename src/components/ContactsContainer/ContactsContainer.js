import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contactsOperations';

import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Container } from './ContactsContainer.styled';
import { selectContacts } from 'redux/selectors';
import { Loader } from '../Loader/Loader';
import { Notification } from '../Notification/Notification';

export const ContactsContainer = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Container>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && !error && <ContactsList />}
      {!isLoading && !error && items.length === 0 && (
        <Notification message="There are no contacts" />
      )}
    </Container>
  );
};
