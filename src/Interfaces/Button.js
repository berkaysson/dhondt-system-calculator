import styled from "styled-components";

const ButtonWrapper = styled.button`
  align-items: center;
  background-color: var(--light-color);
  border: 2px solid var(--dark-alt-color);
  box-sizing: border-box;
  color:${(props)=>(props.buttonType === 'primary' ? 'var(--dark-alt-color)':'var(--theme-color)')} ;
  cursor: pointer;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: var(--font-md);
  justify-content: center;
  letter-spacing: 3px;
  line-height: 1.2rem;
  min-width: ${(props)=>(props.buttonType === '140px' ? '':'80px)')};
  outline: 0;
  padding: ${(props) => (props.buttonType === "primary" ? "var(--padding)" : "var(--padding-sl)")};
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 0.5rem;

  &:focus {
    color: var(--dark-color);
  }

  &:hover {
    border-color: var(--dark-color);
    color: var(--dark-color);
    letter-spacing: 0.8em;
  }

  &:active {
    border-color: var(--dark-alt-color);
    color: var(--dark-alt-color);
  }

  @media (min-width: 768px) {
    min-width: ${(props)=>(props.buttonType === '170px' ? '':'120px)')};
  }
`;

const Button = ({ text, buttonType="primary", type }) => {
  return <ButtonWrapper buttonType={buttonType} type={type}>{text}</ButtonWrapper>;
};

export default Button;
