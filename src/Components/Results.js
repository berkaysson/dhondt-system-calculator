import React from "react";

function Result({results}) {
  return (
    <div>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Party</th>
            <th>Votes</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {results.parties.map((party) => (
            <tr key={party.name}>
              <td>{party.name}</td>
              <td>{party.votes}</td>
              <td>{party.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
