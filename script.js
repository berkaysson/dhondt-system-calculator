let numberOfParty = 5;

function calculate() {
  const totalSeats = document.getElementById("totalSeats").value;
  
  let parties = [];
  for (let i = 1; i <= numberOfParty; i++) {
    const votes = parseInt(document.getElementById(`party${i}`).value);
    parties.push({ name: `Parti ${i}`, votes: votes, seats: 0 });
  }

  parties = calculateResults(totalSeats, parties);

  displayResults(parties);
}

const displayResults = (parties) => {
  let result = "";

  for (let i = 0; i < parties.length; i++) {
    result += parties[i].name + " - " + parties[i].seats + " vekil<br>";
  }

  document.getElementById("result").innerHTML = result;
}

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