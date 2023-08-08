import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function AlignItemsList({designiation,PRIX_PUBLIC,Remboursable,CODE_PCT}) {

const [medicament, setMedicament] = React.useState({
  "CODE_PCT":{CODE_PCT},
  "NOM_COMMERCIAL": "ezez",
  "PRIX_PUBLIC": {PRIX_PUBLIC},
  "TARIF_REFERENCE": 0.0,
  "CATEGORIE": "",
  "DCI": "",
  "AP": "",
  "Remboursable":{Remboursable}
}) 

const dummyData = [
  {
    "CODE_PCT":1,
    "NOM_COMMERCIAL": "7arboucha zar9a",
    "PRIX_PUBLIC": 0.0,
    "TARIF_REFERENCE": 0.0,
    "CATEGORIE": "",
    "DCI": "",
    "AP": "",
    "Remboursable":true
  },
  {
    "CODE_PCT":2,
    "NOM_COMMERCIAL": "7arboucha 7amra",
    "PRIX_PUBLIC": 0.0,
    "TARIF_REFERENCE": 0.0,
    "CATEGORIE": "",
    "DCI": "",
    "AP": "",
    "Remboursable":false
  },
  {
    "CODE_PCT":3,
    "NOM_COMMERCIAL": "7arboucha safra",
    "PRIX_PUBLIC": 0.0,
    "TARIF_REFERENCE": 0.0,
    "CATEGORIE": "",
    "DCI": "",
    "AP": "",
    "Remboursable":true
  }
]



const [medicamentList, setMedicamentList] = React.useState([...dummyData,medicament])





 return (



    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Divider variant="inset" component="li" />



      {medicamentList.map((medicament)=>{return(
 <div  key={medicament.CODE_PCT} >
  <ListItem alignItems="flex-start">  

          <ListItemText
            primary={`${medicament.NOM_COMMERCIAL}`}
            secondary={<React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {`Prix public : ${medicament.PRIX_PUBLIC} CodePCT: ${medicament.CODE_PCT}`}
              </Typography>
              
              {medicament.Remboursable?"    Remboursable":"     nonRemboursable"}
            </React.Fragment>} />
        </ListItem>


        <Divider variant="inset" component="li" />
        </div>)
      })}
    </List>
  );
}
