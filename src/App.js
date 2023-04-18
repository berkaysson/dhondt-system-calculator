import { useState } from "react";
import AllocationHistory from "./Components/AllocationHistory";
import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import Results from "./Components/Results";

function App() {
  const [totalSeats, setTotalSeats] = useState();
  const [numberOfParty, setNumberOfParty] = useState(6);
  const [parties, setParties] = useState(() => {});

  return (
    <div>
      <Header />
      <InputForm numberOfParty={numberOfParty} />
      <Results />
      <AllocationHistory />
    </div>
  );
}

export default App;
