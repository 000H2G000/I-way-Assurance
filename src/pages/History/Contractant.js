import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DropDown from '../DropDown';
import { CardHeader } from 'reactstrap';



const card = (
  <React.Fragment>
    <CardHeader>
        Contractant
    </CardHeader>
    <CardContent>
  <DropDown />
    </CardContent>
    <CardActions>
      <Button  size="small" variant='outlined' >Search</Button>
    </CardActions>
  </React.Fragment>
);

export default function Contractant() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
