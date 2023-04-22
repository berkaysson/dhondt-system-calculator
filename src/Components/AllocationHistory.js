import React from "react";
import styled from "styled-components";
import PartyAllocation from "./PartyAllocation";

const AllocationHistoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  padding: var(--padding);
`;

function AllocationHistory({ parties,district }) {
  const allocationHistoryContent = parties.map((party, index) => {
    if (party.allocationHistory.length !== 0) {
      return (
        <PartyAllocation key={index} party={party} district={district} />
      );
    }

    return null;
  });

  return <AllocationHistoryWrapper>{allocationHistoryContent}</AllocationHistoryWrapper>;
}

export default AllocationHistory;
