function calculate() {
  const totalSeats = document.getElementById("totalSeats").value;
  const party1 = document.getElementById("party1").value;
  const party2 = document.getElementById("party2").value;
  const party3 = document.getElementById("party3").value;
  const party4 = document.getElementById("party4").value;
  const party5 = document.getElementById("party5").value;

  const parties = [
    { name: "Party 1", votes: party1, seats: 0 },
    { name: "Party 2", votes: party2, seats: 0 },
    { name: "Party 3", votes: party3, seats: 0 },
    { name: "Party 4", votes: party4, seats: 0 },
    { name: "Party 5", votes: party5, seats: 0 }
  ];

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

  let result = "";

  for (let i = 0; i < parties.length; i++) {
    result += parties[i].name + " - " + parties[i].seats + " seats<br>";
  }

  document.getElementById("result").innerHTML = result;
}
