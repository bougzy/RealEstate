


// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import MyListing from './Components/MyListing/MyListing';
// import Favourites from './Favourites';
// import Sidebar from './Components/Sidebar/Sidebar';

// import './App.css';  // Import the CSS file

// const App = () => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Home':
//         return <Dashb />;
//       case 'Profile':
//         return <Activities />;
//       case 'Settings':
//         return <MyListing />;
//       case 'Messages':
//         return <Favourites />;
//       default:
//         return <Dashb />;
//     }
//   };

//   return (
//     <Container fluid className="bg-light">
//       <Button 
//         variant="primary" 
//         className="d-md-none mb-3 mt-2 toggle-button"
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         style={{ zIndex: 1050 }}  // Ensure button is above the sidebar
//       >
//         Toggle Sidebar
//       </Button>
//       <Row>
//         <Col 
//           md={3} 
//           className={`sidebar-container ${sidebarOpen ? 'open' : ''} d-md-block`}
//           style={{ zIndex: 1040 }}  // Sidebar z-index
//         >
//           <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//         </Col>
//         <Col md={9} className="bg-light content" style={{ height: "210vh" }}>
//           {renderContent()}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashb from './Components/Dash/Dashb';
import Activities from './Components/Activity/Activities';
import MyListing from './Components/MyListing/MyListing';
import AccountSettings from './Components/AccountingSettings/AccountingSettings'
import Favorites from './Components/Favorites/Favorites';
import SavedProfile from './Components/SavedProfile/SavedProfile';

import './App.css';  // Import the CSS file

const App = () => {
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
        return <Favorites />;
      case 'SavedProfile':
        return <SavedProfile />;
      case 'AccountSettings':
        return <AccountSettings />;
      default:
        return <Dashb />;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </Col>
        <Col md={10} className="bg-light" style={{ height: "130vh" }}>
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default App;

