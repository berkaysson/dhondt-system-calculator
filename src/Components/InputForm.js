import PartyForm from "./PartyForm";

const InputForm = ({numberOfParty}) => {
  const partyForms = [];

  for (let i = 1; i <= numberOfParty; i++) {
    partyForms.push(<PartyForm key={i} partyName={i} />);
  }

  return <div>
    <form>
      <label>Vekil Sayısı</label>
      <input type="number"></input>
      {partyForms}
      <button>Hesapla</button>
    </form>
  </div>
}

export default InputForm;