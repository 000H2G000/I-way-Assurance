import * as React from 'react';
import Box from '@mui/material/Box';
import { Input, InputLabel } from '@mui/material';
import { Container } from 'reactstrap';


const Total = ({totalRemboursable,totalNonRemboursable}) => {
  return (
    <div>
      <Container
    
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
         <InputLabel>Total Medicament remboursable en TND</InputLabel>
         <Input value={totalRemboursable} />
         <InputLabel >Total Medicament non remboursable en TND</InputLabel>
         <Input value={totalNonRemboursable} />
         <Box marginTop={'50px'}>
            <InputLabel>Total</InputLabel>
          <Input value={totalRemboursable+totalNonRemboursable} placeholder='Total' />
         </Box>
         <Box justifyContent={'space-between'} margin={'20px'} >
          
         </Box>
        
        </Box>
      </Container>
    </div>
  )
}

export default Total