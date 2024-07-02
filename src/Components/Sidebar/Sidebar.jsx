


// import React from 'react';
// import { ListGroup } from 'react-bootstrap';
// import { FaHome, FaUser, FaCog, FaEnvelope } from 'react-icons/fa'; // Import icons

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   return (
//     <div className="bg-white sidebar" style={{ height: "150vh" }}>
//       <ListGroup className='list-group-flush  ms-4'>
//         <div className="">
//           <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
//           <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
//         </div>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-5 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('Home')}
//           active={activeTab === 'Home'}
//         >
//           <FaHome className="me-2" /> Dashboard
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('Profile')}
//           active={activeTab === 'Profile'}
//         >
//           <FaUser className="me-2" /> Activity
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('Settings')}
//           active={activeTab === 'Settings'}
//         >
//           <FaCog className="me-2" /> My Listing
//         </ListGroup.Item>
//         <ListGroup.Item
//           className="border-0 rounded-5 mt-3 d-flex align-items-center"
//           action
//           onClick={() => setActiveTab('Messages')}
//           active={activeTab === 'Messages'}
//         >
//           <FaEnvelope className="me-2" /> Favourites
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaEnvelope } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white sidebar" style={{ height: "100vh" }}>
      <ListGroup className='list-group-flush mt-4 ms-4'>
        <div className="">
          <h3 style={{ color: "#FF8844" }}>RealHomes</h3>
          <p className="mt-4" style={{ color: "#FF8844" }}>Personal Account</p>
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
          onClick={() => setActiveTab('SavedProfile')}
          active={activeTab === 'SavedProfile'}
        >
          <FaEnvelope className="me-2" /> Saved Profile
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
    </div>
  );
};

export default Sidebar;

