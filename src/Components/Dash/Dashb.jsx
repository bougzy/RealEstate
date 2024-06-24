import React from 'react';
import { Container, Row, Col, Form, FormControl, Navbar, Image, Button } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import SalesLevel from '../../assets/SalesLevel.png';
import wavegraph from '../../assets/wavegraph.png';
import ProductsCustomer from '../../assets/ProductsCustomer.png';
import EarningVisitor from '../../assets/EarningVisitor.png';
import './dash.css'; // Import the custom CSS file

export const Dashb = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col className="bg-light p-3 d-flex justify-content-between align-items-center">
            <div className="mt-3">
              <p>Hi, Andrei,</p>
              <h1>Welcome to RealHomes!</h1>
            </div>
            <div className="d-flex flex-column align-items-end">
              <Navbar bg="light" className="p-0">
                <Navbar.Text>
                  <Image src={profile} roundedCircle className="profile-image" />
                </Navbar.Text>
              </Navbar>
              <Form inline className="mt-2 search-form">
                <FormControl type="text" placeholder="Search" className="search-input" />
                <Image src={searchlight} className="ms-3"/>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* New Section with Two Columns */}
      <Container className="mt-4">
        <Row>
          <Col sm={8} className="bg-light p-3">
            <Image src={SalesLevel} />
            <Image src={ProductsCustomer} />
            <Image src={EarningVisitor} />
          </Col>
          <Col sm={4} className="bg-light p-3 mt-5">
            <Image src={wavegraph} className="mt-4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashb;

