import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './schedule.css';

function Schedule() {
  return (
    <Container fluid>
      <Row className="Monday Weekday">
        <Col>1 of 3</Col>
        <Col>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row className="Tuesday Weekday">
        <Col>1 of 3</Col>
        <Col>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row className="Wednesday Weekday">
        <Col>1 of 3</Col>
        <Col>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row className="Thursday Weekday">
        <Col>1 of 3</Col>
        <Col>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row className="Friday Weekday">
        <Col>1 of 3</Col>
        <Col>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row className="Saturday Weekday">
        <Col>1 of 3</Col>
        <Col>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row className="Sunday Weekday">
        <Col>1 of 3</Col>
        <Col>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default Schedule;
