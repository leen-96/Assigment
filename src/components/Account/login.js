import React, { Fragment, useState, useEffect } from "react";
import {useLocalStorage } from "./config";
import {
  CardBody, Label, Card} from "reactstrap";
import { Link } from "react-router-dom";
import {ButtonHover,InputStyle} from "./style";
const Login = () => {

  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [checked, setChecked] = useLocalStorage("checked", false);
  console.log(email)
  const handleSubmit = (event) => {
    event.preventDefault();
    if(checked){
      window.location.href="/dashboard";


    }else{
  

      window.location.href="/dashboard";
      localStorage.removeItem('email');

    }
  }
 
  
 
   

  return (
    <div>
      <Card className="login-card my-4 card-shadow">
        <CardBody>
          <form   onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
            <Label className="font-15 upper-case  text-muted my-4" tag="h6">
              E-mail 
            </Label>
            <InputStyle
              type="text"
              placeholder=""
              className="mb-4 font-12 text-muted"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               
            />
            <Label className="font-15  upper-case  text-muted my-4" tag="h6">
              password
            </Label>
            <InputStyle
              type="password"
              placeholder=""
              className="mb-4 font-12 text-muted "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               
            />
              <Label>
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />{" "}
              Remember me
            </Label>

            <ButtonHover
              className="login font-15 upper-case  white-1"
              type="submit"
              color=" "
              value="Submit"
             
            >
            Log in
            </ButtonHover>
           
         
          </form>
        </CardBody>
       
      </Card>
    </div>
  );
};

export default Login;
