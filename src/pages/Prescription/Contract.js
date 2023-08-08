import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';




export default function Contract({contract,setContract,getMedecin}) {
  const [open, setOpen] = React.useState(false);
  const [ banking, setBanking] = React.useState('');
  const [ matricule, setMatricule] = React.useState('');
 
 
 
 
  const handleBanking = (event) => {
    setBanking(event.target.value);
  };

  const handleMatricule = (event) => {
    setMatricule(event.target.value);
  };




  
  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleClose = (event, reason) => {
    console.log("closing popup");
    console.log(banking);
    console.log(matricule);
    setContract(!contract)
    getMedecin()
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };


 

  return (
   
    <div>
      <Button   variant='outlined'  onClick={handleClickOpen}>Search Contractant</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Banking</InputLabel>
              <Select
                native
                value={banking}
                onChange={handleBanking}
                input={<OutlinedInput label="Banking" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option >Noxus Global Banking</option>
                <option >damacia Global Banking</option>
                <option >Ionia Global Banking</option>
                <option >Zone Global Banking</option>
              
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField onChange={handleMatricule} placeholder='Matricule' />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={
            handleClose 
          }>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}
