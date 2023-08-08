
import { Checkbox } from "@mui/material";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    CardFooter,
  } from "reactstrap";
  // import TotalOrdenance from './TotalOrdenance'
import Total from "./Total";
import { useState } from "react";
import AlignItemsList from "./AlignItemsList";
  const Profile = () => {

    const [totalRemboursable, setTotalRemboursable] = useState(0)
    const [totalNonRemboursable, setTotalNonRemboursable] = useState(0)
    const [remboursable, setRemboursable] = useState(false)
    const [designiation, setDesigniation] = useState("")
    const [PRIX_PUBLIC, setPRIX_PUBLIC] = useState(0)
    const [CODE_PCT, setCODE_PCT] = useState(0)
    const [rem, setRem] = useState(false)
    const [des, setDes] = useState("")
    const [prix, setPrix] = useState(0)


    const addMedecin = ()=>{
      console.log(designiation,PRIX_PUBLIC,remboursable)
      setDes(designiation)
      setPrix(PRIX_PUBLIC)
      setRem(remboursable)
    }


    return (
      <>
       
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="8">
              <Card >
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                   
                    <Col className="text-right" xs="4">
                     
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                        Actes Pharmacie
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             Designation
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Dummy Data"
                              id="Designation"
                              placeholder="Username"
                              type="text"
                              onChange={(e)=>setDesigniation(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Prix Public
                            </label>
                            <Input
                              onChange={(e)=>setPRIX_PUBLIC(e.target.value)}
                              className="form-control-alternative"
                              
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Montant Depense
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="20$"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                              onChange={(e)=>{setCODE_PCT(e.target.value)}}
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Remboursable 
                            </label>
                            <Checkbox value={remboursable} onChange={e=>setRemboursable(e.target.checked)} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Dure (j):
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Nombre de jour"
                              id="input-city"
                              placeholder="Dure"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Quantite:
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Quantite"
                              id="input-country"
                              placeholder="Quantite"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                             PU:
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="PU"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <Button onClick={addMedecin}>
                      Add Medecine
                      </Button>
                      <hr className="my-4" />
                        {/* List */}
                        <AlignItemsList designiation={des} PRIX_PUBLIC={prix} remboursable={rem} CODE_PCT={CODE_PCT} />

                      

                  </Form>
                </CardBody>
                <CardFooter>
                
                      
                      <Total totalRemboursable={totalRemboursable}  totalNonRemboursable={totalNonRemboursable} />
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Profile;
  