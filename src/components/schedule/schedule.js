import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear';
import './schedule.css';
import InputData from './../input-data/input-data';

function Schedule() {

  dayjs.extend(weekOfYear);
  const weekDayNumber = dayjs().day();

  let sunday;
  if(weekDayNumber === 0)
    sunday = dayjs();
  else {
      sunday = dayjs().subtract(weekDayNumber, 'day');
  }

  console.log(sunday);

  const daysOfWeek = [{
    day: 'Monday',
    date: sunday.add(1, 'day')
  }, {
    day: 'Tuesday',
    date: sunday.add(2, 'day')
  }, {
    day: 'Wednesday',
    date: sunday.add(3, 'day')
  }, {
    day: 'Thursday',
    date: sunday.add(4, 'day')
  }, {
    day: 'Friday',
    date: sunday.add(5, 'day')
  }, {
    day: 'Saturday',
    date: sunday.add(6, 'day')
  }, {
    day: 'Sunday',
    date: sunday.add(7, 'day')
  }];


  const tabuledWeek = daysOfWeek.map((dayEl) => {
    const classNameDay = dayEl.day + " day";
     return (<Row className={classNameDay}>
          <Col md={2} lg={2}>{dayEl.day} ({dayjs(dayEl.date).format('DD, MMM YY')})</Col>
          <Col md={3} lg={3}>
            <InputData className="input-class"/>
          </Col>
          <Col md={3} lg={3}>
            <InputData className="input-class"/>
          </Col>
          <Col md={3} lg={3}>
            <InputData />
          </Col>
        </Row>)
  });

  const headers = (()=>{return (<Row>
        <Col md={2} lg={2}>Days</Col>
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
