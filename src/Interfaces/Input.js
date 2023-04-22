import { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: var(--gap);
  border-bottom: 1px var(--dark-alt-color) ridge ;
  padding-bottom: 3px;
`;

const Label = styled.label`
  margin-bottom: 0;
  font-size: var(--font-sl);
  color: ${props => props.styleType === 'primary' ? 'var(--light-alt-color)' : 'var(--light-color)'};
  align-self: center;
  font-weight: bold;
`;

const InputField = styled.input`
  padding:0.2rem 0.5rem;
  font-size: var(--font-md);
  background-color: var(--light-color);
  border: 2px solid var(--dark-alt-color);
  box-sizing: border-box;
  color: var(--dark-alt-color);
  transition: all 0.3s;
  width: ${props => props.styleType === 'primary' ? ' 33%' : '25%'};

  &:hover {
    border-color: var(--dark-color);
    color: var(--dark-color);
  }

  &:disabled{
    cursor: not-allowed;
    opacity: 0.5;
    width: 20%;
  }
`;

const SeatContent = styled.span`
  color: var(--light-alt-color);
`

const Input = ({
  labelText,
  inputType,
  id,
  name,
  styleType = "primary",
  step = "0.001",
  inputValue = null,
  isActive = true,
}) => {
  const seatDisabledContent =
    styleType === "secondary" && !isActive
      ? " (Vekil sayısı şehire göre seçildi)"
      : "";

  return (
    <InputWrapper>
      <Label styleType={styleType} htmlFor={name}>
        {labelText}
        <SeatContent>{seatDisabledContent}</SeatContent>
      </Label>
      <InputField
        styleType={styleType}
        type={inputType}
        id={id}
        name={name}
        step={step}
        disabled={isActive ? false : true}
        value={isActive ? null : inputValue}
      />
    </InputWrapper>
  );
};

export default Input;
