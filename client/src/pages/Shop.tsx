import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from "../components/BrandBar";
import DeviceList from '../components/DeviceList';


const Shop = () => {
    return (
        <Container>
         <Row>
             <Col xs={2} sm={2} md={2} lg={2}>
                <TypeBar />
             </Col>
             <Col xs={10} sm={10} md={10} lg={10}>
                <BrandBar />
                <DeviceList />
             </Col>
         </Row>
        </Container>
    )
}

export default Shop