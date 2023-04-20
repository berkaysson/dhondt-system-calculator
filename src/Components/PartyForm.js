const PartyForm = ({partyName, party}) => {
  return <>
    <label htmlFor={partyName}>{party.abb} - Oy sayisi:</label>
    <input type="number" id={party.id} name={party.id}></input>
  </>
}

export default PartyForm;