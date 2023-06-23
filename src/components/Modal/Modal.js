import { Box, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '75%',
  bgcolor: 'background.paper',
  borderRadius: 2.5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const ModalWrapper = ({ children, onClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style }}>
        <IconButton
          type="button"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', top: '8px', right: '8px' }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};
