import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectContacts } from 'redux/contacts/contacts-selectors';

import { TextField, Container, Button, Box, Grid } from '@mui/material';
import { contactsSchema } from './formValidation';

export const ContactsForm = ({
  onSave,
  actionOnSubmit,
  actionBtnText,
  contact = {},
}) => {
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactsSchema),
  });

  const onSubmit = data => {
    const contactExists = items.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    if (contactExists) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(actionOnSubmit({ ...contact, ...data }));
    onSave();
    reset();
  };

  return (
    <Container
      component="div"
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              {...register('name')}
              error={errors.name ? true : false}
              helperText={errors.name?.message}
              autoComplete="given-name"
              name="name"
              defaultValue={contact?.name}
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              sx={{ textTransform: 'capitalize' }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              {...register('number')}
              error={errors.number ? true : false}
              helperText={errors.number?.message}
              required
              fullWidth
              id="number"
              label="Phone number"
              defaultValue={contact?.number}
              name="number"
              autoComplete="number"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {actionBtnText}
        </Button>
      </Box>
    </Container>
  );
};
