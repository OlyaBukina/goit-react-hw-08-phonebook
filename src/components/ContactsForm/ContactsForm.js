import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/contacts-operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectContacts } from 'redux/contacts/contacts-selectors';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

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
    <Container component="div">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register('name')}
                error={errors.name ? true : false}
                helperText={errors.name?.message}
                autoComplete="given-name"
                name="name"
                defaultValue={contact.name}
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
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
                defaultValue={contact.number}
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
      </Box>
    </Container>
  );
};
