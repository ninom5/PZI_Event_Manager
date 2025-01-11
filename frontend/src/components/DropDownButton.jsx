import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropDownButton() {
  return (
    <DropdownButton id="drop-down" title="Events">
      <Dropdown.Item href="">Create event</Dropdown.Item>
      <Dropdown.Item href="">See all events</Dropdown.Item>
      <Dropdown.Item href="">Delete event</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDownButton;
