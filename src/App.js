import { useState } from "react";
import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import Results from "./Components/Results";

const PARTIES = [
  {
    id: 1,
    name: "Adalet ve Kalkınma Partisi",
    ittifak: "Cumhur İttifakı",
    abb: "AKP",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
  {
    id: 2,
    name: "Cumhuriyet Halk Partisi",
    ittifak: "Millet İttifakı",
    abb: "CHP",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
  {
    id: 3,
    name: "Yeşiller ve Sol Gelecek Partisi",
    ittifak: "Emek ve Özgürlük İttifakı",
    abb: "YSGP(HDP)",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
  {
    id: 4,
    name: "İYİ Parti",
    ittifak: "Millet İttifakı",
    abb: "İYİ",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
  {
    id: 5,
    name: "Milliyetçi Hareket Partisi",
    ittifak: "Cumhur İttifakı",
    abb: "MHP",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
  {
    id: 6,
    name: "Memleket Partisi",
    ittifak: "-",
    abb: "MP",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
  {
    id: 7,
    name: "Yeniden Refah Partisi",
    ittifak: "Cumhur İttifakı",
    abb: "YRP",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
  {
    id: 8,
    name: "Türkiye İşçi Partisi",
    ittifak: "Emek ve Özgürlük İttifakı",
    abb: "TİP",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
  {
    id: 9,
    name: "Zafer Partisi",
    ittifak: "Ata İttifakı",
    abb: "ZAFER",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
  {
    id: 10,
    name: "Herhangi Bir Parti",
    ittifak: "-",
    abb: "Diğer, bağımsız",
    votes: 0,
    seats: 0,
    allocationHistory: [],
  },
];

const NUMBER_OF_PARTIES = 10;


function App() {
  const [electionData, setElectionData] = useState({
    totalSeats: 0,
    numberOfParty: NUMBER_OF_PARTIES,
    parties: PARTIES.slice(0, NUMBER_OF_PARTIES)
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newElectionData = {
      totalSeats: parseInt(event.target.totalSeats.value),
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

  return (
    <div>
      <Header />
      <InputForm
        numberOfParty={electionData.numberOfParty}
        onCalculateResults={handleFormSubmit}
        parties = {electionData.parties}
      />
      <Results results={electionData} />
    </div>
  );
}

export default App;
