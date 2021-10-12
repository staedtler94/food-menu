import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
// this is the input for the food in scheduler
function InputData(props){

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter Food Name"
        aria-label="FoodName"
        aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">Pick</InputGroup.Text>
    </InputGroup>
  )
}

export default InputData;
