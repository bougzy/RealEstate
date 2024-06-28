import React, { useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaEnvelope } from 'react-icons/fa'; // Import icons
import Dashb from './Components/Dash/Dashb';
import Activities from './Components/Activity/Activities';
import MyListing from './Components/MyListing/MyListing';
import AccountSettings from './Components/AccountSettings/AccountSettings';
import Favourites from './Favourites';

import './App.css';  // Import the CSS file

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Dashb />;
      case 'Profile':
        return <Activities />;
      case 'Settings':
        return <MyListing />;
      case 'Messages':
        return <Favourites />;
        case 'AccountSettings':
          return <AccountSettings />;
      default:
        return <Dashb />;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-white sidebar" style={{height:"100vh"}}>
          <ListGroup className='list-group-flush mt-4 ms-4'>
            <div className="">
              <h3 style={{color:"#FF8844"}}>RealHomes</h3>
              <p className="mt-4" style={{color:"#FF8844"}}>Personal Account</p>
            </div>
            <ListGroup.Item
              className="border-0 rounded-5 mt-5 d-flex align-items-center"
              action
              onClick={() => setActiveTab('Home')}
              active={activeTab === 'Home'}
            >
              <FaHome className="me-2" /> Dashboard
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => setActiveTab('Profile')}
              active={activeTab === 'Profile'}
            >
              <FaUser className="me-2" /> Activity
            </ListGroup.Item>

            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => setActiveTab('Settings')}
              active={activeTab === 'Settings'}
            >
              <FaCog className="me-2" /> My Listing
            </ListGroup.Item>

            

            <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => setActiveTab('Messages')}
              active={activeTab === 'Messages'}
            >
              <FaEnvelope className="me-2" /> Favourites
            </ListGroup.Item>


            
          <ListGroup.Item
              className="border-0 rounded-5 mt-3 d-flex align-items-center"
              action
              onClick={() => setActiveTab('AccountSettings')}
              active={activeTab === 'AccountSettings'}
            >
              <FaCog className="me-2" /> Account Settings
            </ListGroup.Item>
          </ListGroup>


        </Col>
        <Col md={10} className="bg-light" style={{ height: "100vh" }}>
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
