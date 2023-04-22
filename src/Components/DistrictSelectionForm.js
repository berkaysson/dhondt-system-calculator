import DISTRICTS from "../Data/districtData.json";

import styled from "styled-components";

const SelectionFormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  
`

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid gray;
  font-size: var(--font-sl);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Button = styled.button`
  background-color: var(--light-color);
  border: 1px solid var(--dark-alt-color);
  box-sizing: border-box;
  color: var(--dark-alt-color);
  cursor: pointer;
  justify-content: center;
  outline: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  padding: 5px;
  margin-top: 5px;
  transition: inherit;

  &.active{
    font-weight: bold;
    background-color: var(--light-alt-color);
    font-style: oblique;
  }

  &:focus {
    color: var(--dark-color);
  }

  &:hover {
    border-color: var(--dark-color);
    opacity: 0.9;
  }

  &:active {
    border-color: var(--dark-alt-color);
  }
`

const DistrictSelectionForm = ({ onDistrictSelection, isDistrictSelected }) => {
  const districtNames = Object.keys(DISTRICTS);
  let buttonContent =['Bölgeyi seç | Onayla', 'Bölgesiz devam et'];
  let selectDistrict = "";
  let selectNoDistrict = "";
  if (isDistrictSelected) {
    // buttonContent[0] = buttonContent[0].toUpperCase();
    // buttonContent[1] = buttonContent[1].toLowerCase();
    selectDistrict = "active";
    selectNoDistrict = "";
  } else {
    // buttonContent[1] = buttonContent[1].toUpperCase();
    // buttonContent[0] = buttonContent[0].toLowerCase();
    selectNoDistrict = "active";
    selectDistrict = "";
  }

  return (
    <SelectionFormWrapper>
      <Select id="districtSelection" defaultValue={"ADANA"}>
        {districtNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
      <ButtonContainer>
      <Button className={selectDistrict} type="button" onClick={() => onDistrictSelection(true)}>
        {buttonContent[0]}
      </Button>
      <Button className={selectNoDistrict} type="button" onClick={() => onDistrictSelection(false)}>
      {buttonContent[1]}
      </Button>
      </ButtonContainer>
    </SelectionFormWrapper>
  );
};

export default DistrictSelectionForm;
