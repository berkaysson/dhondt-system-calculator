import DISTRICTS from "../Data/districtData.json";

const DistrictSelectionForm = ({ onDistrictSelection }) => {
  const districtNames = Object.keys(DISTRICTS);
  return (
    <div>
      <select id="districtSelection" defaultValue={"ADANA"}>
        {districtNames.map(name=>(
          <option value={name}>{name}</option>
        ))}
      </select>
      <button type="button" onClick={() => onDistrictSelection(true)}>
        Şehir seç
      </button>
      <button type="button" onClick={() => onDistrictSelection(false)}>
        Şehirsiz devam et
      </button>
    </div>
  );
};

export default DistrictSelectionForm;
