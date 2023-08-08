import React from "react";
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import Contract from "./Prescription/Contract";
import { useState } from "react";
import MedecineTable from './MedecineTable'
import axios from 'axios'

let data = []

const VerifyMedecin = () => {


    const [contract,setContract] = useState(true)

    const getMedecin=(Banking,Matricule) => {
        axios.get(`/api/${Banking+"/"+Matricule}`)
         .then((res) => data = res.data )
         .catch(function (error) {
          console.log(error);
        })

    }


    return (



        
        <Grid container style={{ justifyContent: 'center', alignItems: 'center' }}>
        
        <Container  >
        <Contract  {...{contract,setContract,getMedecin}} />
        {contract?(
                      <MedecineTable data={data} />
                   
        
        ):
         null}
        </Container>

        
        </Grid>
        


        
    )
};

export default VerifyMedecin;
