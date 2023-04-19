import { useState } from "react";
import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import Results from "./Components/Results";

function App() {
  const [electionData, setElectionData] = useState({
    totalSeats: 0,
    numberOfParty: 6,
    parties: []
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newElectionData = {
      totalSeats: parseInt(event.target.totalSeats.value),
      numberOfParty: 6,
      parties: [...Array(electionData.numberOfParty)].map((_, i) => {
        const partyName = `Parti ${i + 1}`;
        const votes = isNaN(parseFloat(event.target[`party-${i + 1}`].value))
          ? 0
          : parseFloat(event.target[`party-${i + 1}`].value);
        return {
          name: partyName,
          votes: votes,
          seats: 0,
          allocationHistory: [],
        };
      }),
    };
    const calculatedParties = calculateResults(newElectionData.parties, newElectionData.totalSeats);
    setElectionData({
      ...newElectionData,
      parties: calculatedParties
    });
  };

  const calculateResults = (parties, totalSeats) => {
    let calculatedParties = [...parties];
    for (let i = 0; i < totalSeats; i++) {
      let max = 0;
      let index = 0;

      for (let j = 0; j < calculatedParties.length; j++) {
        if (calculatedParties[j].votes === null) {
          continue;
        }
        let quotient = calculatedParties[j].votes / (calculatedParties[j].seats + 1);
        if (quotient > max) {
          max = quotient;
          index = j;
        }
      }

      calculatedParties[index].seats++;
      calculatedParties[index].allocationHistory.push({
        seat: i + 1,
        percentage: (
          (calculatedParties[index].votes / calculatedParties[index].seats)
        ).toFixed(4), // calculate the percentage of votes that the party received for the current seat and add "%" symbol
      });
    }
    return calculatedParties;
  };

  return (
    <div>
      <Header />
      <InputForm
        numberOfParty={electionData.numberOfParty}
        onCalculateResults={handleFormSubmit}
      />
      <Results results={electionData} />
    </div>
  );
}

export default App;
