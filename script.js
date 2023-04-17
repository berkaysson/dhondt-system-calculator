let numberOfParty = 6;

function calculate() {
  const totalSeats = document.getElementById("totalSeats").value;
  
  let parties = [];
  for (let i = 1; i <= numberOfParty; i++) {
    const votes = parseInt(document.getElementById(`party${i}`).value);
    parties.push({ name: `Parti ${i}`, votes: votes, seats: 0, allocationHistory: [] });
  }

  parties = calculateResults(totalSeats, parties);

  displayResults(parties);
}

const displayResults = (parties) => {
  let result = "";

  for (let i = 0; i < parties.length; i++) {
    result += parties[i].name + " - " + parties[i].seats + " vekil<br>";
  }
  displayResultsStepbyStep(parties);

  document.getElementById("result").innerHTML = result;
}

const createTable = (numberOfParty, maxSeat) => {
  // Create the table
  let table = document.createElement("table");

  // Create the header row
  let headerRow = document.createElement("tr");
  let partyHeader = document.createElement("th");
  partyHeader.innerText = "Party";
  headerRow.appendChild(partyHeader);

  for (let i = 1; i <= maxSeat; i++) {
    let seatHeader = document.createElement("th");
    seatHeader.innerText = "Seat " + i;
    headerRow.appendChild(seatHeader);
  }

  table.appendChild(headerRow);

  return table;
};

const createPartyRow = (party, numberOfParty, maxSeats) => {
  let row = document.createElement("tr");

  // Party name cell
  let partyNameCell = document.createElement("td");
  partyNameCell.innerText = party.name;
  row.appendChild(partyNameCell);

  // Allocation history cells
  for (let j = 0; j < maxSeats; j++) {
    let seatCell = document.createElement("td");

    if (j >= party.allocationHistory.length) {
      seatCell.classList.add("no-seat");
      seatCell.innerText = "No seat";
    } else {
      seatCell.innerText = party.allocationHistory[j] + ". seat";
    }

    row.appendChild(seatCell);
  }

  return row;
};

const displayResultsStepbyStep = (parties) => {
  let allocationHistoryDiv = document.getElementById("allocationHistory");
  allocationHistoryDiv.innerHTML = "";

  const maxSeats = parties.reduce((max, party) => {
    return party.seats > max ? party.seats : max;
  }, 0);

  // Create the table
  let table = createTable(parties.length, maxSeats);

  // Create the rows for each party
  for (let i = 0; i < parties.length; i++) {
    let party = parties[i];
    let row = createPartyRow(party, parties.length, maxSeats);
    table.appendChild(row);
  }

  allocationHistoryDiv.appendChild(table);
};

const calculateResults = (totalSeats, parties) => {
  console.log(parties)
  for (let i = 0; i < totalSeats; i++) {
    let max = 0;
    let index = 0;

    for (let j = 0; j < parties.length; j++) {
      let quotient = parties[j].votes / (parties[j].seats + 1);
      if (quotient > max) {
        max = quotient;
        index = j;
      }
    }

    parties[index].seats++;
    parties[index].allocationHistory.push(i+1);
  }
  return parties;
}

const renderPartyForms = (numberOfParty) => {
  let formDiv = document.getElementById("form");
  let inputDiv = '';
  for (let i = 1; i <= numberOfParty; i++) {
    inputDiv += `
      <label for="party${i}">Parti ${i} - Oy sayisi:</label>
      <input type="number" id="party${i}" name="party${i}"><br><br>
    `;
  }
  formDiv.innerHTML += inputDiv;
};

function cleanForms() {
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  document.getElementById('result').innerHTML = '';
}


window.onload = () => renderPartyForms(numberOfParty)