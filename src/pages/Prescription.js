import React from "react";
import DataTable from "./Prescription/HistoryTable";
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import Contract from "./Prescription/Contract";
import Patient from "./Prescription/Patient";
import { useState } from "react";
import AddConsultation from "./Prescription/AddConsultation";
 
const Prescription = () => {

    const [contract,setContract] = useState(true)

    return (



        
        <Grid container style={{ justifyContent: 'center', alignItems: 'center' }}>
        
        <Container  >
        <Contract  contract={contract} setContract={setContract} />
        {contract?(<div >
                      <DataTable />,
                      <Patient />,
                      <AddConsultation />
                   </div>
        
        ):
         null}
        </Container>

        
        </Grid>
        


        
    )
};

export default Prescription;
