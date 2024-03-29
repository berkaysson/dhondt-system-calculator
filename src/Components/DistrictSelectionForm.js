import DISTRICTS from "../Data/districtData.json";

import styled from "styled-components";

const SelectionFormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 160px;
  gap: .6rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid gray;
  font-size: var(--font-sl);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 0.5rem;
  transition: opacity 0.1s;
  opacity: 0.2;
  text-align: center;
  margin-top: 1rem;

  &.active {
    opacity: 1;
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
  transition: inherit;
  width: 100%;

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
  let buttonContent = ["Bölgeyi seç | 2023 TR", "Bölgesiz devam et"];
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
      <Button
        className={selectNoDistrict}
        type="button"
        onClick={() => onDistrictSelection(false)}
      >
        {buttonContent[1]}
      </Button>
      <Button
        className={selectDistrict}
        type="button"
        onClick={() => onDistrictSelection(true)}
      >
        {buttonContent[0]}
      </Button>
      <Select
        className={selectDistrict}
        id="districtSelection"
        onChange={() => onDistrictSelection(true)}
        disabled={selectDistrict === "active" ? false : true}
      >
        {districtNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </SelectionFormWrapper>
  );
};

export default DistrictSelectionForm;
