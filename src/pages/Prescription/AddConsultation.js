import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input, InputLabel } from '@mui/material';
import DateConsultation from './DateConsultation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddPrescription() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> Add Consultation</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <InputLabel>Matricule</InputLabel>
         <Input placeholder='Doctor Matreicule' />
         <InputLabel >Specialty</InputLabel>
         <Input placeholder='Doctor Specialty' />
        <DateConsultation />
        <Button onClick={handleClose} type='submit' >Add Consultation</Button>
        </Box>
      </Modal>
    </div>
  );
}
