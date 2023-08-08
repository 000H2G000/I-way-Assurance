import React from 'react'
import Contractant from './History/Contractant'
import { Container} from 'reactstrap'
import BasicTabs from './History/BasicTabs'

const History = () => {
  return (
    <Container className="mt--7" fluid>
       <Contractant />
       <BasicTabs />
    </Container >
    )
}

export default History