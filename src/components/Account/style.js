import styled from 'styled-components'
 import { Button, Input } from 'reactstrap'
  
 
export const ButtonHover = styled(Button)`
    box-shadow: none !important;
    margin: 25px auto;
    background-color: var(--red-color);
    width: 70%;
    border-radius: unset;
    color: white!important;
    background &:hover {
    background: #000;
  }
`
export const DivStyle = styled.div`
  padding: 2px 10px;
  &:hover {
    cursor: pointer;
    background: #dedbd9;
  }
`
export const InputStyle = styled(Input)`
   background: #e9ecef;
    display: block;
    border: none;
    width: 70%;
    border-radius: unset;
    padding: 0.8rem;
  &:focus {
    background: #e9ecef !important;
  }
`

 
