const PartyForm = ({partyName}) => {
  return <>
    <label for={partyName}>Parti ${partyName} - Oy sayisi:</label>
    <input type="number" id={partyName} name={partyName}></input>
  </>
}

export default PartyForm;