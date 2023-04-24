import PartyForm from "./PartyForm";
import DistrictSelectionForm from "./DistrictSelectionForm";

import Button from "../Interfaces/Button";

import styled from "styled-components";
import Input from "../Interfaces/Input";

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap);
  padding:0 var(--padding);
  height: 100%;
  width: 100%;
  /* max-width: 400px; */
  border-right: 1px var(--light-alt-color) solid;

  @media screen and (max-width: 855px) {
    border-right:none;
    border-bottom: 1px solid var(--light-alt-color);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width:100%;
  gap: var(--gap);
`;

const InputForm = ({ numberOfParty, onCalculateResults, parties, totalSeats, isDistrictSelected,onDistrictSelection }) => {
  const partyForms = [];

  for (let i = 1; i <= numberOfParty; i++) {
    partyForms.push(<PartyForm key={i} party={parties[i - 1]} />);
  }

  return (
    <InputFormWrapper>
    <DistrictSelectionForm onDistrictSelection = {onDistrictSelection} isDistrictSelected={isDistrictSelected} />
      <FormWrapper onSubmit={onCalculateResults}>
        <div>
          <Input
            labelText="Vekil Sayısı"
            inputType="number"
            id="totalSeats"
            name="totalSeats"
            styleType="secondary"
            step={1}
            inputValue={totalSeats}
            isActive={!isDistrictSelected}
          />
        </div>
        {partyForms}
        <Button type="submit" text={"HESAPLA"} buttonType='primary'></Button>
        <Button type="reset" text={"TEMİZLE"} buttonType='secondary'></Button>
      </FormWrapper>
    </InputFormWrapper>
  );
};

export default InputForm;
