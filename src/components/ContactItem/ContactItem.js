import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  deleteContact,
  updateContact,
} from 'redux/contacts/contacts-operations';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

import { ContactsForm } from '../ContactsForm/ContactsForm';

import { Item } from './ContactItem.styled';
import { ModalWrapper } from '../Modal/Modal';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(state => !state);

  const handleDelete = () => dispatch(deleteContact(id));

  const { id, name, number } = contact;
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <IconButton type="button" onClick={toggleModal} aria-label="edit">
        <EditIcon />
      </IconButton>

      {isModalOpen && (
        <ModalWrapper onClose={toggleModal} open={isModalOpen}>
          <Typography component="h3" variant="h5">
            Edit contact
          </Typography>
          <ContactsForm
            onSave={toggleModal}
            actionOnSubmit={updateContact}
            actionBtnText="Save changes"
            contact={contact}
          />
        </ModalWrapper>
      )}

      <IconButton type="button" onClick={handleDelete} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
