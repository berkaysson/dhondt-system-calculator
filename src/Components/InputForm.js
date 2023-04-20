import PartyForm from "./PartyForm";

const InputForm = ({numberOfParty, onCalculateResults, parties}) => {
  const partyForms = [];

  for (let i = 1; i <= numberOfParty; i++) {
    partyForms.push(<PartyForm key={i} party={parties[i-1]} partyName={'party-'+i} />);
  }

  return <div>
    <h2>Input Form</h2>
    <form onSubmit={onCalculateResults}>
      <label>Vekil Sayısı</label>
      <input type="number" id="totalSeats" name="totalSeats"></input>
      {partyForms}
      <button type="submit">Hesapla</button>
    </form>
  </div>
}

export default InputForm;