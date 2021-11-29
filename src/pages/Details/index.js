import React, {useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Modal,  ModalBody, } from "reactstrap";
import Navigation from "../../components/NavigationDashboard/navgation";
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { loadData, showData } from '../../Redux/slices/countryRedux/actions';
import { countryData } from '../../Redux/slices/countryRedux/selectors';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import { baseUri } from "../../Services/endpoints";




const Details= () => {
  const dispatch = useDispatch(),
  data = useSelector((state) => countryData({ state }));
  useEffect(() => {
     dispatch(showData(baseUri))
  }, []);


  const flagTemplate = (rowData) => {
    return (
      <div>      <img className="flag-img" src={rowData.flags.svg} alt={rowData.name}/>
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
              <ColumnDirective headerText="CCA3" field="cca3"/>
              <ColumnDirective headerText="official name " field="name.official"/>
              <ColumnDirective headerText="Native Name " field="name.official"/>
              <ColumnDirective headerText="numeric code " field="ccn3"/>

              <ColumnDirective headerText="currencies" field="currencies"/>
              <ColumnDirective headerText="Flag" field="flags.svg" template={flagTemplate}/>


            </ColumnsDirective>
          </GridComponent>
        </Col>      
      </Row>
    </Container>
  );
};

export default Details;
