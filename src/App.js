import { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import Results from "./Components/Results";

import { PARTIES } from "./Data/partiesData";
import DISTRICTS from "./Data/districtData.json"

const NUMBER_OF_PARTIES = 6;

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  align-items: flex-start;
  justify-items: center;

  width: 100%;
  max-width: 1300px;

  @media screen and (max-width: 855px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`

function App() {
  const [electionData, setElectionData] = useState({
    district: null,
    totalSeats: 0,
    numberOfParty: NUMBER_OF_PARTIES,
    parties: PARTIES.slice(0, NUMBER_OF_PARTIES)
  });

  const [isDistrictSelected, setIsDistrictSelected] = useState(false);

  useEffect(() => {
    setIsDistrictSelected(false);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newElectionData = {
      district: isDistrictSelected ? electionData.district : null,
      totalSeats: isDistrictSelected ? electionData.district.totalSeats : parseInt(event.target.totalSeats.value),
      numberOfParty: NUMBER_OF_PARTIES,
      parties: [...Array(electionData.numberOfParty)].map((_, i) => {
        const id = PARTIES[i].id;
        const partyName = PARTIES[i].name;
        const votes = isNaN(parseFloat(event.target[id].value))
          ? 0
          : parseFloat(event.target[id].value);
        const abb = PARTIES[i].abb;
        return {
          name: partyName,
          votes: votes,
          seats: 0,
          allocationHistory: [],
          id:id,
          abb:abb
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

  const handleDistrictChange = (boolean) => {
    if(boolean){
      const newDistrictName = document.getElementById('districtSelection').value;
      const newDistrict = DISTRICTS[newDistrictName];
      setElectionData({
        ...electionData,
        district:{...newDistrict, districtName:newDistrictName},
        totalSeats:newDistrict.totalSeats
      })
    }
    setIsDistrictSelected(boolean);
  }

  return (
    <AppWrapper>
      <Header />
      <InputForm
        numberOfParty={electionData.numberOfParty}
        onCalculateResults={handleFormSubmit}
        parties = {electionData.parties}
        totalSeats={electionData.totalSeats}
        isDistrictSelected={isDistrictSelected}
        onDistrictSelection= {handleDistrictChange}
      />
      <Results results={electionData} />
    </AppWrapper>
  );
}

export default App;
