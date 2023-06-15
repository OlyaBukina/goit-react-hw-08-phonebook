import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';

import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  const { id, name, phone } = contact;
  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    createdAt: PropTypes.string,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
