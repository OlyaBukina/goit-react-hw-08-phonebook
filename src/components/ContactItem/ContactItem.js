import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  updateContact,
} from 'redux/contacts/contacts-operations';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ModalWrapper } from '../Modal/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  IconButton,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(state => !state);

  const handleDelete = () => dispatch(deleteContact(id));

  const { id, name, number } = contact;
  const avatarLetter = name.slice(0, 1).toUpperCase();
  return (
    <ListItem alignItems="center" sx={{ borderBottom: '1px solid #9e9e9e' }}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: '#cdc1d5' }}>{avatarLetter}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            component="p"
            variant="subtitle1"
            fontSize="18px"
            fontWeight="700"
            sx={{ textTransform: 'capitalize' }}
          >
            {name}
          </Typography>
        }
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {number}
          </Typography>
        }
      />

      <IconButton
        type="button"
        onClick={toggleModal}
        aria-label="edit"
        sx={{ marginRight: '4px' }}
      >
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
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
