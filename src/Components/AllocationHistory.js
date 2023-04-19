import React from "react";

function AllocationHistory({ parties }) {
  const allocationHistoryContent = parties.map((party, index) => {
    if (party.allocationHistory.length !== 0) {
      return (
        <div key={index}>
          <h3>{party.name}</h3>
          <ul>
            {party.allocationHistory.map((allocation, index) => (
              <li key={index}>
                Seat {allocation.seat} ({allocation.percentage}%)
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  });

  return <div>{allocationHistoryContent}</div>;
}

export default AllocationHistory;
