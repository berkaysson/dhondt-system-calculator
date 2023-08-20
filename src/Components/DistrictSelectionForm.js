import DISTRICTS from "../Data/districtData.json";

import styled from "styled-components";

const SelectionFormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid gray;
  font-size: var(--font-sl);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 0.5rem;

  &.active {
    font-weight: bold;
    background-color: var(--light-alt-color);
    font-style: oblique;
  }
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
  padding: 0.5rem;
  margin-top: 5px;
  transition: inherit;
  width: 67%;

  &.active {
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
`;

const DistrictSelectionForm = ({ onDistrictSelection, isDistrictSelected }) => {
  const districtNames = Object.keys(DISTRICTS);
  let buttonContent = ["Bölgeyi seç | Onayla", "Bölgesiz devam et"];
  let selectDistrict = "";
  let selectNoDistrict = "";
  if (isDistrictSelected) {
    selectDistrict = "active";
    selectNoDistrict = "";
  } else {
    selectNoDistrict = "active";
    selectDistrict = "";
  }

  return (
    <SelectionFormWrapper>
      <Select
        className={selectDistrict}
        id="districtSelection"
        onChange={() => onDistrictSelection(true)}
      >
        {districtNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
      <div>
        <Button
          className={selectDistrict}
          type="button"
          onClick={() => onDistrictSelection(true)}
        >
          {buttonContent[0]}
        </Button>
        <Button
          className={selectNoDistrict}
          type="button"
          onClick={() => onDistrictSelection(false)}
        >
          {buttonContent[1]}
        </Button>
      </div>
    </SelectionFormWrapper>
  );
};

export default DistrictSelectionForm;
