const PartyForm = ({partyName}) => {
  return <>
    <label htmlFor={partyName}>{partyName} - Oy sayisi:</label>
    <input type="number" id={partyName} name={partyName}></input>
  </>
}

export default PartyForm;