// import React, { useState, useEffect } from "react";
import {Container,Row,Col} from "reactstrap";
import Login from "../../components/Account/login";
// import { Spinner } from "reactstrap";

const LogIn = () => {
 
    return (
      <div>
        <Container className="mt-5  ">
          <Row>
            <Col md={12}>
             <Login/>
            </Col>
           </Row>
        </Container>
      </div>
    )
  
}

export default LogIn;
