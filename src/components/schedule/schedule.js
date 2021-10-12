import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './schedule.css';
import InputData from './../input-data/input-data';

function Schedule() {

  const daysOfWeek = [{
    day: 'Monday',
  }, {
    day: 'Tuesday',
  }, {
    day: 'Wednesday',
  }, {
    day: 'Thursday',
  }, {
    day: 'Friday',
  }, {
    day: 'Saturday',
  }, {
    day: 'Sunday',
  }];

  const tabuledWeek = daysOfWeek.map((dayEl) => {
    const classNameDay = dayEl.day + " day";
     return (<Row className={classNameDay}>
          <Col md={1} lg={1}>{dayEl.day}</Col>
          <Col md={3} lg={3}>
            <InputData className="input-class"/>
          </Col>
          <Col md={{ span:3, offset:1}} lg={{ span:3, offset:1}}>
            <InputData className="input-class"/>
          </Col>
          <Col md={{ span:3, offset:1}} lg={{ span:3, offset:1}}>
            <InputData />
          </Col>
        </Row>)
  });

  const headers = (()=>{return (<Row>
        <Col md={1} lg={1}>Days</Col>
        <Col md={3} lg={3}>Breakfast</Col>
        <Col md={{ span:3, offset:1}} lg={{ span:3, offset:1}}>Lunch</Col>
        <Col md={{ span:3, offset:1}} lg={{ span:3, offset:1}}>Dinner</Col>
     </Row>)
   })()

  return (
    <Container fluid>
      {headers}
      {tabuledWeek}
    </Container>
  );
}

export default Schedule;
