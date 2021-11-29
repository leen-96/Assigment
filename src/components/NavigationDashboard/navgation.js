import React, { Fragment, useState, useEffect } from "react";
import {useLocalStorage } from "./../Account/config";
import { Link } from "react-router-dom";

import {
  CardBody, Label, Card} from "reactstrap";
  const Navigation = () => {

  const [email, setEmail] = useLocalStorage("email", "");
 

 
  
 
   

  return (
    <div>
      <Card className=" my-4 card-shadow">
        <CardBody>
         
         <ul className="click-name">
            <li className="sub-click-name">
              <Link to="#" className="no-underline">
                <Label className="font-20 upper-case  text-dark  " tag="h6">
              Welcome  {email}
            </Label>
            </Link>
              <ul className="dropdown-click card-shadow ">
                <li> <Link to="/login" className="no-underline text-dark">Log Out</Link></li>
               
              </ul>
            </li>
          </ul>
        </CardBody>
       
      </Card>
    </div>
  );
};

export default Navigation;
