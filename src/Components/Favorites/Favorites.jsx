import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col, Card, Form , Button} from 'react-bootstrap';
import firstlistingimage from '../../assets/firstlistingimage.png';
import pencil from '../../assets/pencil.png'; 
import secondcardlisting from '../../assets/secondcardlisting.png';
import thirdcardlisting from '../../assets/thirdcardlisting.png';
import fourthcardlisting from '../../assets/fourthcardlisting.png';
import fifthcardlisting from '../../assets/fifthcardlisting.png';
import sixthcardlisting from '../../assets/sixthcardlisting.png';
import bath from '../../assets/bath.png';
import bed from '../../assets/bed.png';
import room from '../../assets/room.png';
import sqft from '../../assets/sqft.png';
import Search from '../../assets/Search.png';
import dropdown from '../../assets/dropdown.png';
import sorry from '../../assets/sorry.png';


const listingsContainerOne = [
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: firstlistingimage,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: secondcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: thirdcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fourthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fifthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: sixthcardlisting,
  }
];



const Favorites = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [currentView, setCurrentView] = useState('Approved');

  const handleFocus = () => {
    setShowIcon(false);
  };

  const handleBlur = () => {
    setShowIcon(true);
  };

  const [selectedAction, setSelectedAction] = useState({
    forSale: 'For sale',
    price: 'Price',
    bedsBath: 'Beds & Bath',
    homeType: 'Home Type',
    more: 'More',
  });

  const handleSelect = (category, action) => {
    setSelectedAction(prevState => ({
      ...prevState,
      [category]: action
    }));
  };

  



  return (
    <div>
    <div className='my-listing mx-3 mt-3'>Favorites</div>

    <div className="filters-container container mt-2">
        <div className="position-relative search-container">
          {showIcon && <img src={Search} alt="searchicon" className="search-icon" />}
          <Form.Control
            className="custom-input pl-5"
            placeholder="Search city, neighborhood, zip address"
            aria-label="Search"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <div className='dropdown-container px-3'>
            <Dropdown onSelect={(e) => handleSelect('forSale', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.forSale}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('price', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.price}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('bedsBath', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.bedsBath}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('homeType', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.homeType}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('more', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.more}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>


            

            <button className='apply-filter'>Apply Filter</button>



          
          </div>
        </div>





        
      </div>


      <Container className='mt-3'>
  <Row>
    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={firstlistingimage} alt="card-image" className="" />
        <button className='custom-button'>SELL</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>


    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={secondcardlisting} alt="card-image" className="" />
           <button className='custom-button'>SELL</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>

    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={thirdcardlisting} alt="card-image" className="" />
          <button className='custom-button'>SELL</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
  </Row>

  <Row className='mt-2'>
    <Col>
      <Card border='light' bg='light' className="">
        <img src={fourthcardlisting} alt="card-image" className="" />
        <button className='unapproved-button'>UNAPPROVED</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
    <Col>
      <Card border='light' bg='light' className="">
        <img src={fifthcardlisting} alt="card-image" className="" />
        <button className='unapproved-button'>UNAPPROVED</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
    <Col>
      <Card border='light' bg='light' className="">
        <img src={thirdcardlisting} alt="card-image" className="" />
        <button className='unapproved-button'>UNAPPROVED</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
  </Row>
</Container>
    </div>
    
  )
}

export default Favorites