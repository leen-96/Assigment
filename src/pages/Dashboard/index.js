import React, {useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Modal,  ModalBody, } from "reactstrap";
import Navigation from "../../components/NavigationDashboard/navgation";
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { loadData } from '../../Redux/slices/countryRedux/actions';
import { countryData } from '../../Redux/slices/countryRedux/selectors';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";




const Dashboard = () => {
  const dispatch = useDispatch(),
  data = useSelector((state) => countryData({ state }));
  useEffect(() => {
     dispatch(loadData())
  }, []);

  const actionTemplate = (rowData) => {
    return (
      <div onClick={() =>{const ll =console.log(rowData.cca2)} }>
        <Link to={"/details?code=" + rowData.cca2}>
          <AiIcons.AiFillEye/>
          </Link>
          </div>
    )
  }



  return (
    <Container>
      <Row className="my-20">
        <Col md={12}>
          <Navigation />
        </Col>     
        <Col md={12}>
          <GridComponent dataSource={data}>
            <ColumnsDirective>
              <ColumnDirective headerText="Alpha2code" field="cca2"/>
              <ColumnDirective headerText="name" field="name.common"/>
              <ColumnDirective headerText="name" field="capital"/>

              <ColumnDirective headerText="Actions" template={actionTemplate}/>

            </ColumnsDirective>
          </GridComponent>
        </Col>      
      </Row>
    </Container>
  );
};

export default Dashboard;
