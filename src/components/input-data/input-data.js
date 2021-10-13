import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './input-data.css';
// this is the input for the food in scheduler
function InputData(props){

  return (
    <div>
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter Food Name"
        aria-label="FoodName"
        aria-describedby="basic-addon1"
        />
        <Button variant="outline-secondary" id="button-addon2"> Pick </Button>
    </InputGroup>

    </div>
  )
}

export default InputData;
