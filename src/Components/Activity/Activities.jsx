import React from 'react';
import { Container, Table, Row, Col, Card, Form, FormControl, Navbar, Image, Button } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import CalendarComponent from './Calendar';
import { FaRegistered } from 'react-icons/fa';
import freshtop from "../../assets/freshtop.png"
import x from "../../assets/x.png"
import './Activities.css'; 
import { MdMargin } from 'react-icons/md';

export const Dashb = () => {
  return (
    <div>
<div className="container" >
    <Container className="p-3" style={{ position: 'relative', marginLeft: '-30px' }}>
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
      <div className="">
      <Row>
                  <Col>
                    <h1 style={{width:"0px", fontSize:"400%", height:"0px"}}>01</h1> {/* Replace FaIconName with the actual icon name, e.g., FaUser */}
                  </Col>
                  <Col className="mt-3">
                    <p className="">JANUARY <span className="me-4">2021</span></p>
                    
                  </Col>
                </Row>
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
            <Col xs={12} sm={6} md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                  <Row>
                  <Col xs="auto">
                    <Image src={freshtop} style={{width:"100px", height:"100px"}}/> 
                  </Col>
                  <Col className="mt-4">
                    <p>Successful Inspection</p>
                    <p>321</p>
                  </Col>
                </Row>
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} className="mb-4">
              <Card>
                <Card.Body>
                <Card.Title>
                <Row>
                  <Col xs="auto">
                    <Image src={x} style={{width:"100px", height:"100px"}}/> 
                  </Col>
                  <Col className="mt-4">
                    <p>Unsuccessful Inspection</p>
                    <p>0</p>
                  </Col>
                </Row>
                </Card.Title>
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
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">01/01</th>
                  <td>Mr Paul</td>
                  <td>The panoramo</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                </tr>
                <tr>
                  <th scope="row">22/01</th>
                  <td>Peter</td>
                  <td>Blake resort</td>
                  <td>Selling</td>
                  <td>08133289824</td>
                </tr>
                <tr>
                  <th scope="row">24/01</th>
                  <td>Miss Abigail</td>
                  <td>Lekki duplex</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                </tr>
                <tr>
                  <th scope="row">31/01</th>
                  <td>Mr Blake</td>
                  <td>Living spring</td>
                  <td>Renting</td>
                  <td>08133289824</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col xs={12} lg={4} className="">
          <CalendarComponent />
        </Col>
      </Row>
    </Container>


    
    
<Container className="mt-3">
      <Row>
        <Col xs="12" lg="12" className=""> {/* Center the column within the container */}
          <div className="m-3">
            <h3 className="mt-5">Recent Inspection</h3> {/* Center the header */}
          </div>
          <div className="table-responsive rounded-4">
            <Table hover className="bg-white no-borders text-center custom-table"> {/* Center table content */}
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Client's Name</th>
                  <th scope="col">Property</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <th scope="row">01/01</th>
                  <td>Mr Paul</td>
                  <td>The panoramo</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                  <td style={{color:"#00FF38"}}>Sold</td>
                </tr>
                <tr>
                <th scope="row">01/01</th>
                  <td>Mr Paul</td>
                  <td>The panoramo</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                  <td style={{color:"#00FF38"}}>Bought</td>
                </tr>
                <tr>
                <th scope="row">22/01</th>
                  <td>Peter</td>
                  <td>Blake resort</td>
                  <td>Selling</td>
                  <td>08133289824</td>
                  <td style={{color:"#61FF00"}}>Bought</td>
                </tr>
                <tr>
                <th scope="row">24/01</th>
                  <td>Miss Abigail</td>
                  <td>Lekki duplex</td>
                  <td>Buying</td>
                  <td>08133289824</td>
                  <td style={{color:"#00B2FF"}}>Rented out</td>
                </tr>
                <tr>
                <th scope="row">31/01</th>
                  <td>Mr Blake</td>
                  <td>Living spring</td>
                  <td>Renting</td>
                  <td>08133289824</td>
                  <td style={{color:"#00B2FF"}}>Rented out</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>


    </div>
  );
}

export default Dashb;

