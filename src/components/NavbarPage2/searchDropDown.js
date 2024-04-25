import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";


function SplitBasicExample() {
  return (
    <Dropdown as={ButtonGroup} className="custom-dropdown">
      <div className="button-end">
        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <Button variant="dark" className="text-class ">
        גן שורק
      </Button>
    </Dropdown>
  );
}

export default SplitBasicExample;
