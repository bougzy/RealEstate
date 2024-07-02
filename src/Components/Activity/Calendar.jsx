// src/components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  return (
    <div className="mt-5">
      <Calendar onChange={onChange} value={value} className="p-5 border rounded" />
    </div>
  );
};

export default CalendarComponent;








{/* <Container>
        <Col xs={12} md={6}>
              <Card className="mb-3" id="calendar">
                <Card.Body>
                  <Card.Title>Calendars</Card.Title>
                  <CalendarComponent />
                </Card.Body>
              </Card>
            </Col>
        </Container> */}