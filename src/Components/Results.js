import React from "react";
import AllocationHistory from "./AllocationHistory";

function Result({results}) {
  console.log(results);
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
            <tr key={party.abb}>
              <td>{party.abb}</td>
              <td>{party.votes}</td>
              <td>{party.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AllocationHistory parties = {results.parties} />
    </div>
  );
}

export default Result;
