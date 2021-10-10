import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './schedule.css';

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
          <Col md={3} lg={3}>{dayEl.day}</Col>
          <Col md={3} lg={3}>
            <Button className="pull-right" variant="primary" size="sm">
              Add
            </Button>
          </Col>
          <Col md={3} lg={3}>3 of 3</Col>
          <Col md={3} lg={3}>3 of 3</Col>
        </Row>)
  });

  const headers = (()=>{return (<Row>
        <Col md={3} lg={3}>Days</Col>
        <Col md={3} lg={3}>Breakfast</Col>
        <Col md={3} lg={3}>Lunch</Col>
        <Col md={3} lg={3}>Dinner</Col>
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
