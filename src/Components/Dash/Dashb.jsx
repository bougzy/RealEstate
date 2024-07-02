import React from 'react';
import { Container, Table, Row, Col, Card, Form, FormControl, Navbar, Image, Button } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import coin from "../../assets/coin.png"
import bag from "../../assets/bag.png"
import trade from "../../assets/trade.png"
import user from "../../assets/user.png"
// import SalesLevel from '../../assets/SalesLevel.png';
// import wavegraph from '../../assets/wavegraph.png';
// import ProductsCustomer from '../../assets/ProductsCustomer.png';
// import EarningVisitor from '../../assets/EarningVisitor.png';
import './dash.css'; // Import the custom CSS file
import { MdMargin } from 'react-icons/md';
import CalendarComponent from '../Activity/Calendar';
import { FaRegistered } from 'react-icons/fa';

export const Dashb = () => {
  return (
    <div>
<div className="container" >
<Container className="p-3" style={{ position: 'relative', marginLeft:"-30px" }}>
      <Image
      className="position-absolute mt-2 border profile"
        src={profile}
        style={{
          position: '',
          top: 0,
          right: 0,
          maxWidth: '180px',
          maxHeight: '150px'    
        }}
        roundedCircle
      />
    </Container>
    </div>





<Container className="mt-4">
  <Row>
    <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
      <div className="mt-3">
        <p>Hi, Andrei,</p>
        <h1>Welcome to RealHomes!</h1>
      </div>
    </Col>
    <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
      <Form inline className="mt-2 search search-form search-form-mobile">
        <FormControl type="text" placeholder="Search" className="search-input" />
        <Image src={searchlight} className="ms-2" />
      </Form>
    </Col>
  </Row>
</Container>



<Container className="my-4">
      <Row>
        <Col xs={12} lg={8}>
          <h3>Today's Data</h3>
          <Row>
            <Col xs={12} sm={6} md={3} className="mb-4">
              <Card className="border-0 rounded-4">
                <Card.Body className="mt-2">
                    <Image src={trade} className="w-25"/>
                    <h4 className="mt-2">$5k</h4>
                    <p>Total Sales</p>
                    <p className="fs-6" style={{color:"#FEB95A"}}>+10% from yesteray</p>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="border-0 rounded-4">
                <Card.Body className="mt-2">
                    <Image src={bag} className="w-25"/>
                    <h4 className="mt-2">50</h4>
                    <p>Property Bought</p>
                    <p className="fs-6" style={{color:"#A9DFD8"}}>+8% from yesteray</p>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="border-0 rounded-4">
                <Card.Body className="mt-2">
                    <Image src={coin} className="w-25"/>
                    <h4 className="mt-2">900</h4>
                    <p>Property Sold</p>
                    <p className="fs-6" style={{color:"#F2C8ED"}}>+2% from yesteray</p>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="border-0 rounded-4">
                <Card.Body className="mt-2">
                    <Image src={user} className="w-25"/>
                    <h4 className="mt-2">12</h4>
                    <p>New Views</p>
                    <p className="fs-6" style={{color:"#20AEF3"}}>+3% from yesteray</p>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h3 className="mt-5">Next Inspection</h3>
          <div className="table-responsive rounded-4">
            <Table hover className="bg-white no-borders text-center custom-table">
              <thead>
                <tr>
                  <th scope="col">Dates</th>
                  <th scope="col">Clients Name</th>
                  <th scope="col">Property</th>
                  <th scope="col">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">01/01</th>
                  <td>Mr Paul</td>
                  <td>The panoramo</td>
                  <td>
                <Button style={{color: "#FCB859", border: "#FCB859 solid 2px", background: "#FCB8591F"}}>Sold</Button>
              </td>
                </tr>
                <tr>
                  <th scope="row">22/01</th>
                  <td>Peter</td>
                  <td>Blake resort</td>
                  <td>
                  <Button style={{color: "#A9DFD8", border: "#A9DFD8 solid 2px", background: "#A9DFD81F"}}>Approved</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">24/01</th>
                  <td>Miss Abigail</td>
                  <td>Lekki duplex</td>
                  <td>
                  <Button style={{color: "#0075FF", border: "#0075FF solid 2px", background: "#A9DFD81F"}}>Bought</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">24/01</th>
                  <td>Miss Abigail</td>
                  <td>Lekki duplex</td>
                  <td>
                  <Button style={{color: "#A9DFD8", border: "#A9DFD8 solid 2px", background: "#A9DFD81F"}}>Approved</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col xs={12} lg={4} className="mt-5">
        <Card className="border-0 rounded-4">
                <Card.Body className="mt-5" style={{height:"65vh"}}>
                    
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
        </Col>
      </Row>
    </Container>
</div>
  );
}

export default Dashb;

