import PartyForm from "./PartyForm";

import Button from "../Interfaces/Button";

import styled from "styled-components";
import Input from "../Interfaces/Input";

const InputFormWrapper = styled.div`
  text-align: center;
  gap: var(--gap);
  padding: var(--padding);
  border-bottom: 1px solid var(--light-alt-color);
  width: 100%;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap);
`

const InputForm = ({numberOfParty, onCalculateResults, parties}) => {
  const partyForms = [];

  for (let i = 1; i <= numberOfParty; i++) {
    partyForms.push(
      <PartyForm key={i} party={parties[i - 1]} partyName={"party-" + i} />
    );
  }

  return (
    <InputFormWrapper>
      <FormWrapper onSubmit={onCalculateResults}>
        <div>
          <Input
            labelText="Vekil Sayısı"
            inputType="number"
            id="totalSeats"
            name="totalSeats"
          />
        </div>
        {partyForms}
        <Button type="submit" text={"Hesapla"}></Button>
      </FormWrapper>
    </InputFormWrapper>
  );
}

export default InputForm;