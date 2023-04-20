import Input from "../Interfaces/Input";

const PartyForm = ({ party }) => {
  return (
    <Input
      labelText={`${party.abb} - Oy sayisi: `}
      inputType={"number"}
      id={party.id}
      name={party.id}
    />
  );
};

export default PartyForm;
