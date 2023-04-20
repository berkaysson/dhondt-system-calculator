import styled from "styled-components";

const ButtonWrapper = styled.button`
  align-items: center;
  background-color: var(--light-color);
  border: 2px solid var(--dark-alt-color);
  box-sizing: border-box;
  color: var(--dark-alt-color);
  cursor: pointer;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: var(--font-md);
  justify-content: center;
  letter-spacing: 3px;
  line-height: 1.2rem;
  min-width: 140px;
  outline: 0;
  padding: var(--padding);
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    color: var(--dark-color);
  }

  &:hover {
    border-color: var(--dark-color);
    color: var(--dark-color);
    letter-spacing: 6px;
  }

  &:active {
    border-color: var(--dark-alt-color);
    color: var(--dark-alt-color);
  }

  @media (min-width: 768px) {
    min-width: 170px;
  }
`;

const Button = ({ text }) => {
  return <ButtonWrapper>{text}</ButtonWrapper>;
};

export default Button;
