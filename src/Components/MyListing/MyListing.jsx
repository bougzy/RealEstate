import React from 'react';
import { Container, Card, Row, Col, Form, FormControl, Navbar, Image, Button, Dropdown } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import "./mylisting.css"; // Import the custom CSS file

export const MyListing = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col className="bg-light p-3 d-flex justify-content-between align-items-center">
            <div className="mt-3">
              <Container>
                <Row>
                  <Col className="bg-white text-dark fw-bold p-2 approved">Approved</Col>
                  <Col className="text-dark fw-bold p-2 unapproved">Unapproved</Col>
                </Row>
              </Container>    
              <h1>My List</h1>
            </div>
            <div className="d-flex flex-column align-items-end">
              <Navbar bg="light" className="p-0">
                <Navbar.Text>
                  <Image src={profile} roundedCircle className="profile-image" />
                </Navbar.Text>
              </Navbar>
              <Form inline className="mt-2 search-form" style={{ width: "200px" }}>
                <FormControl type="text" placeholder="Search" className="search-input" />
                <Image src={searchlight} className="ms-3" />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* New Container and Row for Search Area and Dropdowns */}
      <Container className="mt-4">
        <Row className="align-items-center">
          <Col md={3}>
            <FormControl type="text" placeholder="Search" className="me-2" style={{ width: '100%' }} />
          </Col>
          {Array.from({ length: 5 }).map((_, index) => (
            <Col key={index}>
              <Dropdown>
                <Dropdown.Toggle variant="" className="bg-white rounded-5 my-1" id={`dropdown-basic-${index}`}>
                  {index === 0 && "For sale"}
                  {index === 1 && "Price"}
                  {index === 2 && "Bods & Bath"}
                  {index === 3 && "Home type"}
                  {index === 4 && "More"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          ))}
          <Col>
            <Button className="apply-filter rounded-5">Apply Filter</Button>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
            <Row>
                <Col className="">
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                This is a sample card with image 1.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Card.Body>
                            <Card.Title>Card 2</Card.Title>
                            <Card.Text>
                                This is a sample card with image 2.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Card.Body>
                            <Card.Title>Card 3</Card.Title>
                            <Card.Text>
                                This is a sample card with image 3.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4 ">
                <Col className="">
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                This is a sample card with image 1.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Card.Body>
                            <Card.Title>Card 2</Card.Title>
                            <Card.Text>
                                This is a sample card with image 2.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Card.Body>
                            <Card.Title>Card 3</Card.Title>
                            <Card.Text>
                                This is a sample card with image 3.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    </div>
  );
}

export default MyListing;
